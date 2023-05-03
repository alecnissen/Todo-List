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

    console.log(editElement.dataset.index);

    editElement.addEventListener("click", (e) => { 

      // e.preventDefault();

      console.log("you clicked the edit button, HOLD STRONG!"); 

      modalForEditTodoTasks.style.display = "flex"; 

      overlayForEditTodoTasks.style.display = "flex";
     
     let addBtnWithinTodoModal = document.getElementById("add-task-todo-modal-edit"); 

      // may be better to make a submit event 
     addBtnWithinTodoModal.addEventListener("click", (e) => { 

        // e.preventDefault(); 

        let titleInputValueEditTodo = document.getElementById("title-of-todo-edit-input-form").value; 

        // console.log(titleInputValueEditTodo);

        let descriptionInputValueEditTodo = document.getElementById("description-for-todo-edit").value; 

        // console.log(descriptionInputValueEditTodo); 

        let dueDateInputValueEditTodo = document.getElementById("due-date-for-todo-task-edit").value; 

        // console.log(dueDateInputValueEditTodo);

        let priorityInputValueEditTodo = document.getElementById("priority-for-todo-task-edit").value; 

        // console.log(priorityInputValueEditTodo);

        let editTodoObject = todoObjectFactory(titleInputValueEditTodo, descriptionInputValueEditTodo, dueDateInputValueEditTodo, priorityInputValueEditTodo); 

        console.log(editTodoObject); 

        //  currentProject.todoItems.push(editTodoObject);

         let clickedTodoEditItem = currentProject.todoItems[editElement.dataset.index]; 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRXJCOztBQUU5Qzs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxvREFBbUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHTTs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2Qjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE9BQU87Ozs7QUFJUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7QUFNRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFtQjtBQUNyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLG9EQUFtQjs7QUFFM0I7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxvREFBbUI7O0FBRXpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCLDhCQUE4QjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThMQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFVBQVU7Ozs7QUFJVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLElBQUk7OztBQUdKOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUIsMkJBQTJCLEdBQUc7QUFDOUI7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7Ozs7QUFNQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0NBQXNDO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsSUFBSTs7OztBQUlKOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2Qjs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlyRUE7O0FBRUE7O0FBRW9COztBQUVEOztBQUVpRjs7QUFFcEc7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLLHdEQUFpQjs7QUFFdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJEQUFnQixDQUFDLG1EQUFZOzs7Ozs7QUFNN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1aENvQjs7QUFFcEIsWUFBWSxlQUFlOztBQUUzQixDQUFxRzs7O0FBR3RGOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNuTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gaW1wb3J0IHVwZGF0ZUFycmF5U3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxubGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbmxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxubGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbEZvckVkaXRUb2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZWRpdC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWwtZWRpdFwiKVswXTsgXG5cbmxldCBlZGl0VG9kb1Rhc2tzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1lZGl0aW5nLXRvZG8tdGFza3NcIik7XG5cbmxldCBjdXJyZW50UHJvamVjdCBcblxuZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG5mdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5cblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7IFxuXG5cbmZ1bmN0aW9uIHByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKSB7IFxuICBcbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKTsgXG5cblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbmZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxucHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbiBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4gIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG59KSBcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgIFxuXG5cblxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVcbiAgICBsZXQgcHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3RJbmRleC5wcm9qZWN0OyBcblxuICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4gICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcbiAgICBcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgfSlcblxuXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gXCIuLi9wbHVzLXNpZ24tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICBcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG4gICAgfSlcbiAgfVxufSBcblxuIFxuXG5mb3JtVGFnRm9yTW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KSAgXG5cbmVkaXRUb2RvVGFza3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cbmxldCBjbG9zZUJ0bkVkaXRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWVkaXQtdG9kby1tb2RhbC1idG5cIik7IFxuXG5jbG9zZUJ0bkVkaXRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSlcblxuXG5sZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG5jYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59KSBcblxuXG5sZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbn0pIFxuXG5cbmxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG5jaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4gIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuICBsZXQgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbiAgbGV0IHRhc2tIb2xkZXJTdHlsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpWzBdO1xuXG4gIGxldCBwcm9qZWN0SUQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gIFxuICBsZXQgdmFsdWUgPSBjdXJyZW50UHJvamVjdDsgXG4gIFxuICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBcbiAgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIC8vIGl0IGlzIGRlbGV0aW5nIGZyb20gc3RvcmFnZSwgaXQgaXMganVzdCBub3QgXG5cbiAgLy8gZGVsZXRpbmcgdGhlIHRvZG8gZnJvbSB0aGUgRE9NLCBcbiAgLy8gcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnJlbW92ZSgpIFxuXG4gIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuICBcblxufSkgIFxuXG5cblxuXG5cbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmxldCBhZGRCdG5Ub0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWxcIik7IFxuXG5cbmFkZEJ0blRvRG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+ICB7IFxuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG5cbiAgbGV0IHRpdGxlSW5wdXRGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWlucHV0LWZvcm1cIik7IFxuXG4gIGxldCB0aXRsZUlucHV0VmFsdWUgPSB0aXRsZUlucHV0Rm9yVG9kby52YWx1ZTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godGl0bGVJbnB1dFZhbHVlKTsgXG5cbiAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG9cIik7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSA9IGRlc2NyaXB0aW9uRm9yVG9kby52YWx1ZTsgXG4gIFxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSk7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IGR1ZURhdGVGb3JUb2RvVmFsdWUgPSBkdWVEYXRlRm9yVG9kby52YWx1ZTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kb1ZhbHVlID0gcHJpb3JpdHlGb3JUb2RvLnZhbHVlOyAgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2gocHJpb3JpdHlGb3JUb2RvVmFsdWUpO1xuXG4gIC8vIGxldCBjdXJyZW50UHJvamVjdHNUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtczsgXG5cbiAgLy8gbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgXG4gIGxldCB0b2Rvc0ZvclByb2plY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWUsIGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlLCBwcmlvcml0eUZvclRvZG9WYWx1ZSwgZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG4gIFxuICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2Rvc0ZvclByb2plY3QpOyBcbiAgXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcyk7XG5cbmRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbmZvcm1JbnB1dC5yZXNldCgpO1xuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG59KSAgIFxuXG5mdW5jdGlvbiB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7IFxuICBcbiAgcmV0dXJuIHsgXG4gICAgdGl0bGU6IHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSBcbiAgfSBcbiAgXG59ICAgIFxuXG5cbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGhpbiB0aGUgdG9kbyBmYWN0b3J5IFxuLy8gdGhhdCB0YWtlcyB0aGUgaW5kZXgsIFxuXG5sZXQgZ2V0UHJvamVjdElkXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmdhcCA9IFwiMmVtXCI7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuXG5cbiAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgIC8vIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgXG4gICAgdGFza0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpO1xuICBcbiAgICBcbiAgICBcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcblxuICAgIGdldFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkXG5cbiAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4gICAgbGV0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICBjb25zb2xlLmxvZyhlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4KTtcblxuICAgIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIHRoZSBlZGl0IGJ1dHRvbiwgSE9MRCBTVFJPTkchXCIpOyBcblxuICAgICAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgXG4gICAgIGxldCBhZGRCdG5XaXRoaW5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWwtZWRpdFwiKTsgXG5cbiAgICAgIC8vIG1heSBiZSBiZXR0ZXIgdG8gbWFrZSBhIHN1Ym1pdCBldmVudCBcbiAgICAgYWRkQnRuV2l0aGluVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICAgIGxldCB0aXRsZUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1lZGl0LWlucHV0LWZvcm1cIikudmFsdWU7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvKTsgXG5cbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2stZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbyk7XG5cbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvKTtcblxuICAgICAgICBsZXQgZWRpdFRvZG9PYmplY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWVFZGl0VG9kbywgZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG8sIGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG8sIHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvKTsgXG5cbiAgICAgICAgY29uc29sZS5sb2coZWRpdFRvZG9PYmplY3QpOyBcblxuICAgICAgICAvLyAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZWRpdFRvZG9PYmplY3QpO1xuXG4gICAgICAgICBsZXQgY2xpY2tlZFRvZG9FZGl0SXRlbSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4XTsgXG5cbiAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZFRvZG9FZGl0SXRlbSk7XG5cbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS50aXRsZSA9IHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvOyBcblxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG87IFxuXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG87IFxuXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbzsgXG5cbiAgICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2VkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXhdLnB1c2goeCkpO1xuXG4gICAgICB9KVxuICAgICAgXG4gICAgXG4gICAgfSlcblxuICAgIGVkaXRFbGVtZW50LnNyYyA9IFwiLi4vZWRpdC1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwLjIwZW1cIjtcblxuICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjtcblxuICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBkZWxldGVJY29uLmlkID0gXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCI7IFxuXG4gIC8vICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgZGVsZXRlSWNvbi5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgLy8gdGFza0hvbGRlci5yZW1vdmUoKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuICAgICAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnNwbGljZShkZWxldGVJY29uLmRhdGFzZXQuaW5kZXgsIDEpO1xuICAgICAgXG4gICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG4gICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBwcm9qZWN0cyB0aGF0IGhhdmUgYmVlbiBkZWxldGVkLCBcblxuICAgICAgLy8gc29tZXdheSB0byB1cGRhdGUgcHJvamVjdEFycmF5LCBhbmQgdGhlbiBwYXNzIHRvIGEgc3RvcmFnZSBmdW5jdGlvbiBcblxuICAgICAgLy8gcHJvamVjdEFycmF5LnB1c2goY3VycmVudFByb2plY3QpOyBcbiAgICAgIFxuICAgICAgLy8gcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgICAgIC8vIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbiAgICAgIFxuXG4gICAgICAvLyBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4gICAgfSkgXG5cbiAgICBkZWxldGVJY29uLnNyYyA9IFwiLi4vdHJhc2hjYW4tc3ZncmVwby1jb20gKDEpLnN2Z1wiOyBcblxuICAgIGRlbGV0ZUljb24uc3R5bGUud2lkdGggPSBcIjMwcHhcIjtcblxuICAgIGRlbGV0ZUljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuICAgIC8vIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gICAgLy8gZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIHRvZG8gaGFzIGJlZW4gcHJlc3NlZCFcIik7XG4gICAgIFxuICAgIC8vIH0pXG5cbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7IFxuXG4gICAgdG9kb1RpdGxlLmFwcGVuZChzZWxlY3RlZFByb2plY3QudGl0bGUpO1xuXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG5cbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIlxuXG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgXG4gICAgdG9kb1ByaW9yaXR5LmFwcGVuZChzZWxlY3RlZFByb2plY3QucHJpb3JpdHkpO1xuICAgIFxuICAgIHRvZG9EdWVEYXRlLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZHVlRGF0ZSk7XG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvVGl0bGUpOyAgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1ByaW9yaXR5KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZSk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChkZWxldGVJY29uKTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChlZGl0RWxlbWVudCk7XG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2JsdWVcIjtcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjFlbVwiOyBcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLndpZHRoID0gXCIyNzVweFwiOyBcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUuYm9yZGVyID0gXCI1cHggc29saWQgYmxhY2tcIjtcblxuICAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQodGFza0hvbGRlcik7XG4gICAgXG4gICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuICB9ICBcblxuICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gbGV0IGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCIpOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyhkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbSk7IFxuXG4gIC8vIGxldCB0YXNrSG9sZGVyQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpWzBdOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyh0YXNrSG9sZGVyQ2xhc3MpO1xuXG4gIC8vIGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAvLyAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIHRvZG8gaGFzIGJlZW4gcHJlc3NlZCFcIik7XG4gIC8vICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdElkKTsgXG5cbiAgLy8gICAgIC8vICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LmlkLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgLy8gICBsZXQgaWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICAgaWYgKGN1cnJlbnRQcm9qZWN0SWQgPT09IGlkKSB7IFxuICAvLyAgICAgLy8gICAgIC8vIGlmIGlkJ3MgbWF0Y2ggcmVtb3ZlIHRoZSBzZWxlY3RlZCBwcm9qZWN0LCBcbiAgLy8gICAgIC8vICAgfSBlbHNlIHsgXG4gIC8vICAgICAvLyAgICAgcmV0dXJuO1xuICAvLyAgICAgLy8gICB9XG5cbiAgLy8gICAgIC8vICB9IFxuXG4gIC8vICAgICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uKG9uZVByb2plY3RJZCkgeyBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gIC8vICAgICB9KVxuICAvLyAgIH0pXG4gIFxuIH0gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuLy8gaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG4vLyBpbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuLy8gaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuLy8gaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbi8vIGltcG9ydCBhcnJheVN0b3JhZ2VUb2RvSXRlbXMgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG4vLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG4vLyBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbi8vIGxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG4vLyBsZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxuLy8gbGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbi8vIGxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBjdXJyZW50UHJvamVjdCBcblxuLy8gZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSBcblxuLy8gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG4vLyBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9IFxuXG4vLyBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKTtcblxuLy8gZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIH1cblxuLy8gcHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbi8vICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4vLyAgIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG4vLyB9KSBcblxuLy8gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gfSkgXG5cblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHByb2plY3Q6IG5hbWUsXG4vLyAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4vLyAgICAgdG9kb0l0ZW1zOiBbXSxcbi8vICAgfVxuLy8gfSBcblxuLy8gYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbi8vICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG4vLyB9KSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuLy8gICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbi8vICAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuLy8gICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4vLyAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG4gICAgXG4vLyAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbmRleDsgXG4gICAgICBcbi8vICAgICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbi8vICAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbi8vICAgICAgIH0pXG5cblxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLnNyYyA9IFwiLi4vcGx1cy1zaWduLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlc1wiKTtcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLnNyYyA9IFwiLi4vdHJhc2hjYW4tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlc1wiKTtcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpOyBcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuLy8gICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcbiAgICAgXG4vLyAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH0gXG5cbiBcblxuLy8gZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSkgIFxuXG4vLyBsZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG4vLyBjYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyB9KSBcblxuXG4vLyBsZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuLy8gY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbi8vIH0pIFxuXG5cbi8vIGxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG4vLyBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4vLyAgIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuLy8gICBsZXQgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTtcblxuLy8gICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbi8vICAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbi8vICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4vLyAgIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4vLyAgIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuLy8gICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcblxuXG4vLyB9KSAgXG5cblxuLy8gbGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cblxuXG4vLyBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1jcmVhdGluZy10b2RvLXRhc2tcIik7XG5cbi8vIGZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cblxuLy8gYWRkQnRuVG9Eb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cblxuLy8gICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbi8vICAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuLy8gICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kb1wiKTsgXG5cbi8vICAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlID0gZGVzY3JpcHRpb25Gb3JUb2RvLnZhbHVlOyBcbiAgXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlKTsgXG5cbi8vICAgbGV0IGR1ZURhdGVGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgZHVlRGF0ZUZvclRvZG9WYWx1ZSA9IGR1ZURhdGVGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvVmFsdWUgPSBwcmlvcml0eUZvclRvZG8udmFsdWU7ICBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChwcmlvcml0eUZvclRvZG9WYWx1ZSk7XG5cbi8vICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0c1RvZG9zID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zOyBcblxuLy8gICAvLyBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICBcbi8vICAgbGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcbiAgXG4vLyAgIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRvZG9zRm9yUHJvamVjdCk7IFxuICBcbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuLy8gLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuLy8gfSkgICBcblxuLy8gZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbi8vICAgcmV0dXJuIHsgXG4vLyAgICAgdGl0bGU6IHRpdGxlLCBcbi8vICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuLy8gICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4vLyAgICAgZHVlRGF0ZTogZHVlRGF0ZSBcbi8vICAgfVxuLy8gfSAgICAgXG5cbi8vIC8vIHByb2JsZW0gaXMgYXBwZW5kaW5nIGFuZCBkaXNwbGF5aW5nIHRvZG8gdmFsdWVzIFxuXG4vLyAvLyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gLy8gaXNzdWUgaXMgc2F2aW5nIGV2ZXJ5IHNpbmdsZSBpbnB1dCBhcyBhIG5ldyBhcnJheSBlbnRyeSwgXG5cbi8vIC8vIFxuXG4vLyBsZXQgZ2V0UHJvamVjdElkXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmdhcCA9IFwiMmVtXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG5cbi8vICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuLy8gICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gIFxuICAgIFxuLy8gICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4vLyAgICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcbiAgICBcbi8vICAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuICAgIFxuLy8gICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuICAgIFxuLy8gICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuLy8gICAgIGxldCBlZGl0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3JjID0gXCIuLi9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjAuMjBlbVwiO1xuXG5cblxuLy8gICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjsgXG5cbi8vICAgICB0b2RvVGl0bGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC50aXRsZSk7XG5cbi8vICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcblxuLy8gICAgIHRvZG9EZXNjcmlwdGlvbi5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcblxuLy8gICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiXG5cbi8vICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBcbi8vICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5wcmlvcml0eSk7XG4gICAgXG4vLyAgICAgdG9kb0R1ZURhdGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kdWVEYXRlKTtcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9UaXRsZSk7ICBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTsgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtibHVlXCI7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxZW1cIjsgXG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS53aWR0aCA9IFwiMjc1cHhcIjsgXG5cbi8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuLy8gICAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcbi8vICAgfSBcbiAgXG4vLyAgfSBcblxuXG4vLyBwcmFjdGljZSB3aXRoIG9iamVjdHMgXG5cbi8vIGxldCBhcnJheTEgPSBbXTtcblxuLy8gY29uc3QgVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkYXRlKSB7XG4vLyAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbi8vICAgdGhpcy5kYXRlID0gZGF0ZTtcbi8vIH07XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgIGxldCB4eXogPSBuZXcgVG9kbyhgJHtpfSB0aXRsZWAsIGkpXG4vLyAgIGFycmF5MS5wdXNoKHh5eik7XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKGFycmF5MSkgXG5cblxuLy8gcHJhY3RpY2UgbWFraW5nIG9iamVjdHMgXG5cbi8vIHB1c2hpbmcgaW50byBhbiBhcnJheSBcblxuLy8gaXRlcmF0aW5nIHRocm91Z2ggdGhlIGFycmF5LCBcblxuLy8gZ2V0IGVhY2ggZmllbGQgYnkgaXQncyBrZXksICBcblxuLy8gbGV0IG5ld0FyciA9IFtdOyBcblxuLy8gZnVuY3Rpb24gY3JlYXRpbmdPYmplY3RzKHRpdGxlLGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgeyBcbi8vICAgY29uc3QgbmV3T2JqZWN0ID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0gXG4vLyAgIG5ld0Fyci5wdXNoKG5ld09iamVjdCk7IFxuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspIHsgXG4gICBcbi8vICAgICBsZXQgdGl0bGUgPSBuZXdBcnJbMF0udGl0bGU7XG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uID0gbmV3QXJyWzBdLmRlc2NyaXB0aW9uOyBcbi8vICAgICBsZXQgZHVlRGF0ZSA9IG5ld0FyclswXS5kYXRlO1xuLy8gICAgIGxldCBwcmlvcml0eUxldmVsID0gbmV3QXJyWzBdLnByaW9yaXR5O1xuICAgIFxuICAgIFxuLy8gICB9XG4vLyB9IFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJBbGVjXCIsIFwid29ya2luZyBvbiB0b2RvLWxpc3RcIiwgXCI0LzIwLzIzXCIsIFwiSGlnaFwiKTsgIFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJIZWxsb1wiLCBcIkNoZWNrIDEuLjJcIiwgXCI2LzIwLzIzXCIsIFwiSGlnaFwiKTsgXG5cbi8vIGdldHRpbmcgYWxsIHRoZSBrZXlzIGZyb20gdGhlIGZpcnN0IG9iaiBpbiB0aGUgYXJyYXlcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLnRpdGxlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRlc2NyaXB0aW9uKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRhdGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0ucHJpb3JpdHkpOyBcblxuLy8gZ2V0dGluZyBhbGwgdGhlIGtleXMgZnJvbSB0aGUgc2Vjb25kIG9iaiBpbiB0aGUgYXJyYXkgXG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS50aXRsZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kYXRlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLnByaW9yaXR5KTsgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAvLyBpdCB3YXMgdGhlIGxvb3AsIFtpXSB3YXMgdGFraW5nIGluIGEgc2luZ2xlIHZhcmlhYmxlIFxuXG4gLy8gbm93IHdlIGhhdmUgdGhlIHRvZG8gaXRlbSB3aXRoaW4gYSBzaW5nbGUgZGl2IGFuZCBzdHlsZSBcblxuLy8gZWFjaCB0b2RvIGl0ZW0gaXMgaW5zaWRlIGl0J3Mgb3duIGRpdiwgXG5cbi8vIGVhY2ggdG9kbyBpdGVtIG5lZWRzIHRvIGJlIGluc2lkZSBvbmUgZGl2LCBcblxuLy8gTk9UIEVBQ0ggVE9ETyBJVEVNIElOU0lERSBBIERJViwgXG5cbi8vIGdldCBhbGwgdGhlIHRvZG8ncy4gXG5cblxuLy8gSSBkb250IHVuZGVyc3RhbmQgd2h5IHRoaXMgaXMgc28gZnVja2luZyBjb25mdXNpbmcsIFxuXG4vLyBpIGp1c3Qgd2FudCBlYWNoIHRvZG8gdG8gYmUgaXQncyBvd24gZGl2LCBcblxuLy8gdGhlbiBhcHBlbmQgdG8gdGhlIEZVQ0tJTkcgQ09OVEFJTkVSISEhIFxuXG4vLyB1c2UgYSBsb29wLCBnZXQgcHJvamVjdCwgYXBwZW5kIHRvIGRpdiwgdGhlbiBhcHBlbmQgdG8gc2VjdGlvbiwgXG5cbi8vIHdoeSBhcmUgdGhleSBzdGlsbCBidW5jaGVkIHRvZ2V0aGVyPz8/IFxuXG5cbi8vIGhvdyBjYW4gSSBtYWtlIGVhY2ggc2V0IG9mIHRvZG9zIGEgc2VwZXJhdGUgZGl2Pz8gXG5cbi8vIGFwcGVuZCB0aGUgdG9kbydzIHRvIGEgZGl2IHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cblxuLy8gc3R5bGUgZWFjaCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cbi8vIExvb2sgb3ZlciBjb2RlLCBcblxuLy8gSSB3YW50IHRvIGRpc3BsYXkgdGhlIHRvZG8ncyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gaG93IGFtIEkgYWRkaW5nIHRoZSB0b2RvJ3MsIFxuXG4vLyBzdHJpY2tseSBsb29rIGF0IHRoZSBmdW5jdGlvbiwgXG5cblxuXG5cbi8vIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRUb0RvVmFsdWVzKHByb2plY3QpIHsgXG4gIFxuLy8gICBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gICBsZXQgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBsZXQgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdCA9IHByb2plY3Q7IFxuXG4vLyAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykgeyBcbi8vICAgLy8gICBsZXQgeCA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3RbaV07IFxuXG4vLyAgIC8vICAgY29uc29sZS5sb2coeCk7IFxuLy8gICAvLyB9XG5cbi8vICAgbGV0IGRpc3BsYXlUaXRsZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QudGl0bGU7IFxuXG4vLyAgIGxldCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uOyBcblxuLy8gICBsZXQgZGlzcGxheVByaW9yaXR5ID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5wcmlvcml0eTsgXG5cbi8vICAgbGV0IGRpc3BsYXlEdWVEYXRlID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kdWVEYXRlOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVRpdGxlKTtcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RGVzY3JpcHRpb24pOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheUR1ZURhdGUpO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5UHJpb3JpdHkpOyBcblxuXG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBvayBJIGFtIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZXMsIEkgYW0gYWJsZSB0byBwcmludCB0aGUgdmFsdWVzIHRvIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgcGVybWFuZW50bHkgYWRkIHRoZXNlIHRvZG8gaXRlbXMgb250byBlYWNoIHByb2plY3QgXG5cbi8vIGFuZCBzYXZlIHRoZW0gZWFjaCB0aW1lIHNvIHRoZXkgcmVsb2FkIG9uIHJlZnJlc2g/IFxuXG4vLyBJIGNhbiBncmFiIHRoZSBjdXJyZW50IHByb2plY3QsIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCwgYmV0d2VlbiBwcm9qZWN0cyBcblxuLy8gdGhlbiBob3cgY2FuIEkgYWRkIHRoZXNlIG5ld2x5IGFkZGVkIHRvZG8ncyBiYWNrIGludG8gdGhlIGFycmF5LCBcblxuLy8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/ICBcblxuLy8gSSBhYmxlIHRvIGFkZCB0b2RvIGl0ZW1zIGludG8gYSBwcm9qZWN0LCBidXQgaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCAgdGhlbT8gXG5cbi8vIGRvIEkgbmVlZCB0byBwdXNoIHRoZW0gYmFjayBpbnRvIHRoZSBhcnJheT8gXG5cbi8vIFxuXG5cblxuXG4vLyBnZXQgYWxsIHRoZSB2YWx1ZXMsIHdpdGhpbiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBnZXQgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCB2YWx1ZXMgYXJlIHNhdmVkLCBcblxuLy8gcGFzc2VkIHRvIHRoZSBzcGVjaWZpYyBwcm9qZWN0cyB0b2RvIGFycmF5LCBcblxuLy8gYWxzbyBwYXNzZWQgdG8gc3RvcmFnZSB0b28gc28gdGhlIHRvZG8gYXJyYXkgaXMgdGhlIHNhbWUgYXMgcmVndWxhciBwcm9qZWN0IGFycmF5IFxuXG4vLyBzbyB3ZSBoYXZlIHRvIGFiaWxpdHkgdG8gZ2V0IHRoZSB2YWx1ZXMsIFxuXG4vLyBhbmQgcHVzaCB0aGVtIHRvIHRoZSBjb3JyZWN0IHByb2plY3QsIFxuXG4vLyB0aGV5IGRvIG5vdCBzYXZlLCBhbmQgY2xlYXIgdXBvbiByZWZyZXNoLiBcblxuLy8gaG93IGNhbiBJIHB1c2ggdGhlc2UgdmFsdWVzIGludG8gdGhlIGFycmF5LCBwZXJtYW5lbnRseSBzYXZlIHRoZW0sIFxuXG4vLyBhbmQgdGhlbiBkaXNwbGF5IHRoZW0/IEhvdyBjYW4gSSBkaXNwbGF5IHRoZSB0b2RvJ3M/IFxuXG4vLyBEbyBJIGhhdmUgdG8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHByb2plY3RzIGFycmF5PyBcblxuLy8gZG8gSSBoYXZlIHRvIHBhc3MgcHJvamVjdCBhcnJheSBhZ2Fpbj8gXG5cbi8vIHlvdSB3aWxsIGhhdmUgdG8gZGlzcGxheSB0aGUgcHJvamVjdHMgYWdhaW4gXG5cbi8vIHRoZSB0b2RvJ3MgYXJlIGJlaW5nIHVwZGF0ZWQgXG5cbi8vIHB1c2ggdGhlIHVwZGF0ZWQgcHJvamVjdHNBcnJheSwgYW5kIGZpbmQgYSB3YXkgdG8gZGlzcGxheSB0b2RvJ3MsXG5cbi8vIFxuXG5cblxuXG4vLyBjb25zdCBBcHAgPSAgKCgpID0+IHtcbi8vICAgLy8gbGV0IHByb2plY3RBcnJheSA9IFtdXG4vLyAgIGxldCBjdXJyZW50UHJvamVjdFxuXG4vLyAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbi8vICAgICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QgPSBjdXJyZW50UHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdC5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0LmlkKVxuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICByZXR1cm4ge3NldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdH1cbi8vIH0pKClcblxuXG5cbi8vIEhlbGxvLCBJIGFtIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0b2RvLCBJJ20gdHJ5aW5nIHRvIGltcGxlbWVudCBzb21lIGxvZ2ljIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBwcm9qZWN0IGJ0biwgaXQgd2lsbCBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgYW5kIGluIHRoZSBcInlvdXIgcHJvamVjdHNcIiBzZWN0aW9uLiBCYXNpY2FsbHkganVzdCB1c2luZyBhIGxpc3RlbmVyLCB0aGF0IHdoZW4gdGhlIHVzZXIgY29uZmlybXMgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgZGlzcGxheSwgdGhlbiByZW1vdmUgdGhlIHZhbHVlLiBUaGUgcHJvYmxlbSBpcyBJIGdldCB1bmRlZmluZWQgd2hlbiBJIHRyeSB0aGlzIGFwcHJvYWNoLCB3aGljaCBpcyBzdHJhbmdlIGJlY2F1c2UgSSdtIGdldHRpbmcgdGhlIGVsZW1lbnQsIHRoZXJlIGlzIGEgdmFsdWUgaW5zaWRlIHRoZXJlLCB0aGVuIGp1c3QgdXNpbmdyIC52YWx1ZS4gXG5cblxuXG4vLyBydW5uaW5nIGludG8gYSBwcm9ibGVtIHdpdGggdG9kbywgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBidG4gYW5kIHRoZXkgY29uZmlybSBcblxuLy8gdGhleSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSB3YW50IHRvIGRlbGV0ZSBpdCBmcm9tIG1haW4gY29udGFpbmVyIGFzIHdlbGwgYXMgdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIE5vdCBzdXJlIElmIEknbSBkb2luZyB0aGlzIHJpZ2h0IGJ1dCBJIGNhbiBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYW5kIHRoZW4gdXNlIHJlcGxhY2VDaGlsZHJlbiB0byBjbGVhciB0aGUgRE9NIF1cblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBwcmV0dHkgc3R1Y2sgb24gaG93IHRvIGRlbGV0ZSBpdCBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24/IFxuXG4vLyBCYXNpY2FsbHkgSSB0aGluayBvZiBzb21laG93IGdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIG1haW4gY29udGFpbmVyLCBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiB1c2luZyByZW1vdmVDaGlsZCB0byBkZWxldGUgdGhlIHByb2plY3QgbmFtZSBpbiBib3RoIHBsYWNlcywgXG5cblxuXG4gIFxuLy8gT0sgd2VsbCB0aGlzIGlzIG9uZSB3YXkgdG8gY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIFxuXG4vLyBidXQgaG93IGNhbiBJIGFjY2VzcyB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiBhbmQgZGVsZXRlIHRoYXQ/IFxuXG4vLyBJIG5lZWQgdG8gYWxzbyBkZWxldGUgdGhhdCBzYW1lIHByb2plY3QgbmFtZSB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbi4gbG9vayB1cCByZXBsYWNlQ2hpbGRyZW5cblxuLy8gbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZSB3aGF0IGFyZSB5b3UgcmVwbGFjaW5nIHdpdGg/IEhvdyBkbyB5b3Uga25vdyB3aGljaCBlbGVtZW50IHRvIHJlcGxhY2UgaXQgd2l0aD8gXG5cblxuXG4vLyBsZXQgY2FuY2VsQnRuQXJyYXkgPSBBcnJheS5mcm9tKGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCk7XG5cblxuXG4vLyBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyk7XG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lc0NsaWNrRXZlbnQoYXJyYXkpIHsgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KHByb2plY3RBcnJheSk7XG5cblxuXG4vLyBJIHRoaW5rIEkgTmVlZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGRvbid0IHdhbnQgdG8gaGF2ZSB0b28gbXVjaCBnb2luZyBvbiBpbiBvbmUgZnVuY3Rpb24sIFxuXG4vLyB1c2UgdGhlIHNhbWUgbG9naWMsIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5LCBcbiBcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleC5wcm9qZWN0KTtcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gb2sgbmV4dCwgcHJvamVjdCBuYW1lcyBhcmUgYmVpbmcgYWRkZWQgZHluYW1pY2FsbHksIHRoZXkgYXJlIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIHRoZSBhcnJheSBhbmQgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG5leHQgd2hlbiBJIGNsaWNrIG9uIHRoZSBwcm9qZWN0LCB0aGF0IHByb2plY3QncyBuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgY2xlYXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCwgXG5cbi8vIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgaXMgYWRkZWQgYXQgYSB0aW1lLCBzaG91bGQgbm90IGFkZCBvbnRvLiBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIGFsb25nIHdpdGggdGhlIHR3byBidG5zLCBhZGQgYW5kIGRlbGV0ZSBmb3IgdGhlIHRvZG8ncyBcblxuLy8gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIHNob3cgdGhhdCBwcm9qZWN0LCB1c2VyIGNhbm5vdCBhcHBlbmQgdGhhdCBwcm9qZWN0IG11bHRpcGxlIHRpbWVzIGJ5IGNsaWNraW5nLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gdGhpcyB3aWxsIGJlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGZpcnN0IEkgZmVlbCBsaWtlIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgZnJvbSB0aGUgYXJyYXksIGluc2lkZSB0aGUgbGlzdGVuZXIsIGxvZ2ljIHdpbGwgZ3JhYiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBhbmQgYXBwZW5kIHZhbHVlcyB0byBpdCwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIHRvIGRldGVybWluZSBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IGFkZGVkIHN1Y2ggYXMgSUQncyBtYXRjaGluZywgXG5cbi8vIGlmIElEIG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCBmcm9tIGFkZGluZyBhZ2FpbiwgZWxzZSBpZiBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJlZm9yZSB0aGUgcHJvamVjdCBuYW1lIGlzIGFwcGVuZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoYXQgbmFtZXMgaWQgbWF0Y2hlcyB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIEkgd291bGQgc2F5IGZpcnN0IGxldCdzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGNhbiBncmFiIGFsbCB0aGUgcHJvamVjdCBuYW1lcyBhbmQgSUQ/IFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0LCBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgXG5cbi8vIEknbSBub3Qgc3VyZSB5b3UgbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgc2VlbXMgbGlrZSB5b3VyIGdldHRpbmcgcHJvamVjdCB0YXJnZXQgdmFsdWUsIHdpdGggZS50YXJnZXQudGV4dENvbnRlbnQgXG5cbi8vIG5vdyBJIGJlbGlldmUgd2hhdCB5b3UgbmVlZCB0byBmaWd1cmUgb3V0IGlzIGhvdyB0byBkaXNwbGF5IHRoZSBjZXJ0YWluIHByb2plY3QsIGJhc2VkIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyByZW1lbWJlciByZXBsYWNlIHRoZSBjb250ZW50IHdpdGhpbiBtYWluIGNvbnRhaW5lciwgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSBhbGwgYmFzZWQgb24gYnRuIGNsaWNrIFxuXG4vLyB0aGluayBiYWNrIHRvIHJlc3RhdXJhbnQgcGFnZSwgXG5cbi8vIEkgc29tZWhvdyBuZWVkIHRvIHRoaW5rIHRoaXMgb3V0LCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgY29udGVudHMgb2YgcHJldmlvdXMgcHJvamVjdCBhbmQgbWFrZSB3YXkgZm9yIG5ldywgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHNvbWUgc29ydCBvZiBjb25kaXRpb25hbCwgaWYgdGhpcyBwcm9qZWN0IGlzIGNsaWNrZWQsIGNoYW5nZSB0byBhIHZhcmlhYmxlIHRoZW4gdXNlIHJlcGxhY2UgY2hpbGQuIFxuXG4vLyBpZiB0aGUgdmFyaWFibGUgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgb3IgdGhlIGRpdiwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCAgXG5cbi8vIFxuXG4vLyAtLSBob3cgdG8gbWFrZSBzdXJlIG9ubHkgdGhhdCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaXQgd2lsbCBwb3B1bGF0ZSwgd2l0aCB0aGF0IHByb2plY3QgbmFtZSwgd2lwZSB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgXG5cbi8vIC0tIHdoeSBpcyB0aGUgcHJvamVjdCdzIHNlY3Rpb24gbm90IGR5bmFtaWNhbGx5IGFkZGluZyBwcm9qZWN0cz8gSSBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZm9yIGl0IHRvIHNob3cgdXA/IFxuXG4vLyBoYW5kbGUgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZpcnN0LCBhbmQgY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG1haW4gY29udGFpbmVyIGZpcnN0LCBcblxuLy8gc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGlzIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzLCByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGNhbiBiZSBkaXNwbGF5ZWQgYXQgYSB0aW1lLCBcblxuLy8gaWYgcHJvamVjdCBjb250YWluZXIgaW5jbHVkZXMgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBzaG91bGQgaXQgYmUgc2ltaWxhciB0byByZXN0YXVyYW50IHBhZ2UsIGVhY2ggcHJvamVjdCBpcyBnaXZlbiBhIHZhcmlhYmxlLCB0aGVuIGlmIHRoYXQgcHJvamVjdCBpcyBjbGlja2VkIG9uIGl0J3MgZ2l2ZW4gYSB2YXJpYWJsZSBvciBpbmRleCwgXG5cbi8vIHRoZW4gY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QncyBJRCwgbWF0Y2hlcyB3aGF0IGlzIGluc2lkZSB0aGUgbWFpbiBjb250YWluZXIsIGlmIG5vdCBjbGlja2VkLCByZXBsYWNlIHdpdGggbmV3IGNsaWNrLCBcblxuLy8gaWYgaXQgaXMgY2xpY2tlZCBhZ2FpbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIHJlcGxhY2luZyB0aGUgY29udGVudCwgXG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aCB0aGUgcHJvamVjdHMgdW5xaXVlIElELCBpZiBwcm9qZWN0LmlkID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIHRoYXQgYnRuIGFnYWluLCBqdXN0IHJldHVybiwgXG5cbi8vIGNhbiB3ZSBnbyBiYWNrIGFuZCBsb29rIGF0IHdoYXQgeW91IGRpZCBwcmV2aW91c2x5IHdpdGggeW91ciBjb2RlP1xuXG4vLyBJIGRvbid0IHRoaW5rIGl0J3MgdGhlIHNhbWUgcHJldmlvdXNseSwgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBkaXYgaGVyZSBpbnN0ZWFkIG9mIGEgYnV0dG9uLCBcblxuLy8gSSB3YW50IHRvIGZpbmQgYSB3YXkgdGhhdCBJIGNhbiBvbmx5IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgc2hvdWxkIGFkZCBkdXBsaWNhdGVzLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIHJlcGxhY2UgY29udGVudHMgb2Ygb2xkIGFuZCB3aXBlIHRoZSBuZXcsIFxuXG4vLyBJIHRoaW5rIHRoZSBET00gRGlzcGxheSBpcyBmaW5lLCBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIGEgZnVuY3Rpb24sIGNyZWF0aW5nIGEgZGl2IHRoYXQgc3RvcmVzIHRoZSBwcm9qZWN0cyBuYW1lLCBcblxuLy8gbm93IG9uY2UgdGhlIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgbG9vcCB0aHJvdWdoIHN0b3JhZ2UsIGZpbmQgb3V0IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24gYW5kIGRpc3BsYXkncyBpdCdzIGNvbnRlbnRzLCBcblxuLy8gc3RpY2sgd2l0aCBob3cgeW91IGFyZSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgRE9NLCBcblxuLy8gaG93IHdpbGwgeW91IGFkZCB0aGluZ3MgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGRpc3BsYXkgb25seSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gbWFrZSBhIGxvb3AgZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGNvbXBhcmUgdGhlIElEIHRvIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkIG9uLCBcblxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbih2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWVJRCA9IHByb2plY3RWYWx1ZS5pZDsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gcHJvamVjdFZhbHVlW1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcblxuLy8gaGVyZSB0byB0b3Agb2YgZnVuY3Rpb24sIFxuXG5cblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgLy8gaGVyZSB0byBib3R0b20gYnJhY2tldCBcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhcik7XG5cbi8vIH1cblxuXG4vLyBmb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG4vLyAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSB2YWx1ZUluUHJvamVjdFtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3REaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICBwcm9qZWN0RGl2LmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cblxuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdWYWx1ZSk7XG5cblxuXG5cbi8vICAgLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBsZXQgcHJvamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VEYXRhKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVzKTtcbi8vICAgLy8gY29uc29sZS5sb2cocGFyc2VEYXRhKTtcbi8vICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0KTtcbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBcblxuXG5cblxuXG5cblxuXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSwgXG4vLyBhcHBlbmRzIHRoZSByZXN1bHQgdG8gdGhlIERPTS4gXG5cbi8vIGZ1bmN0aW9uIHByaW50U3RvcmFnZVRvRG9tKCkgeyBcbi8vICAgLy8gbGV0IGdldFN0b3JhZ2VJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4vLyAgIC8vIGxldCBwYXJzZWRJdGVtcyA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZUl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuXG4gXG5cbi8vICAgbGV0IG5hdlByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuLy8gICBuYXZQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoc3R1cGlkVmFsdWUpO1xuLy8gfSBcblxuXG4vLyBwcmludFN0b3JhZ2VUb0RvbSgpO1xuXG5cblxuXG5cbiAgLy8gbGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG4gIC8vIGxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuICAvLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpOyBcblxuLy8gY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuXG4vLyBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuLy8gWWVhaCwgSSB0aGluayBmb2N1c2luZyBvbiB0aGUgYmFzaWMgaWRlYSBvZiBob3cgdG8gY3JlYXRlIGEgcHJvamVjdCBhbmQgXG4vLyB0byBkaXNwbGF5IHRoZSBjb3JyZWN0IHByb2plY3Qgd2hlbiBpdHMgc2lkZWJhciBidXR0b24gaXMgY2xpY2tlZCB3b3VsZCBiZSBteSBmaXJzdCBzdGVwLiBcbi8vIFRoZW4geW91IGNhbiB0aGluayBhYm91dCB3aGF0IHNob3VsZCBiZSBvbiB0aGUgcHJvamVjdCdzIHBhZ2U6IHRoZXkgd2lsbCBuZWVkIGJ1dHRvbnMgdG8gYWRkIGEgdGFzayBhbmQgd2hhdCBub3RcblxuLy8gaGF2ZSB0aGUgdXNlciBlbnRlciBhIHByb2plY3QgbmFtZSwgYW5kIHNhdmUgdGhlIHZhbHVlLCBwYXNzIHRoYXQgdmFsdWUgdG8gc3RvcmFnZS4gXG5cbi8vIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBzYXZlZCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGQgYnRuLCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBnZXQgdGhlIGlucHV0IGZpZWxkLCBjYXB0dXJlIGl0J3MgdmFsdWUgdGhlbiBjb25zb2xlIGxvZyBpdCBcblxuLy8gdGhlIGlzc3VlIG9mIHRoZSB0ZXh0IGluIHRoZSBpbnB1dCBmaWVsZCBiZWluZyBjbGVhcmVkLCBcblxuLy8gd2VsbCBJIHdyYXBwZWQgaXQgaW5zaWRlIGEgZm9ybSB0YWcsIGl0IHdvcmtzIGJ1dCBpdCByZWZyZXNoZXMgdGhlIHBhZ2UsIEkgbWVhbiBpcyB0aGF0IGEgcHJvYmxlbSwgXG5cbi8vIEkgZ3Vlc3Mgbm93IEknbGwgd29yayBvbiBzdG9yaW5nIHRoZSBkYXRhLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgLy8gaW4gb3JkZXIgdG8gY2VudGVyIGl0IHlvdSBuZWVkIHRvIGFwcGVuZCB0aGlzIGVsZW1lbnQgXG5cbi8vICAgICAgIC8vIHRvIGFub3RoZXIgY29udGFpbmVyIFxuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlc1wiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZFwiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7IFxuXG4vLyAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBwb3BVcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBvcC11cC1jb250ZW50XCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1maWVsZC1zdHlsZXNcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTsgXG5cbi8vICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4vLyAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi10by1kby1pbnB1dFwiKVxuXG4vLyAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2Nsb3NlLWNpcmNsZS5wbmdcIjsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIHVyZ2VuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICBsZXQgdXJnZW5jeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uY2xhc3NMaXN0LmFkZChcInVyZ2VuY3ktZHJvcGRvd24tc3R5bGVzXCIpO1xuXG5cblxuLy8gICAgICAgbGV0IHVyZ2VuY3lIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCIgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiOyBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7IFxuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBkYXRlUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuLy8gICAgICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUhpZ2gpO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeU1lZGl1bSk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TG93KTsgXG5cblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVPZlRvRG9JbnB1dEZvcm0pOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudExhYmVsKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lEcm9wRG93bik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bkNvbnRhaW5lcik7IFxuXG4gICAgXG5cbi8vICAgICAgIC8vIHNob3VsZCBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXI/IFxuXG4vLyAgICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4vLyAgICAgfSkgXG5cbi8vICAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCIvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZVxuXG4vLyBpbXBvcnQgXCJzcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qc1wiO1xuXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TmFtZUxvb3AoKSB7ICAgXG5mb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG5cbiAgICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcblxuICAgICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbiAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpOyBcblxufSAgXG5cbn0gXG5cbnByb2plY3ROYW1lTG9vcCgpO1xuICBcbnByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgIFxuXG5cblxuXG5cbi8vIHRvZGF5LCBlZGl0aW5nIHRvZG8ncyBcblxuLy8gdXNpbmcgZ2V0dGVycyBhbmQgc2V0dGVycywgXG5cbi8vIGxvb2sgYmFjayBhdCBleGFtcGxlLCBhbmQgc2VlIGhvdyB5b3UgY2FuIHdvcmsgdGhhdCBpbnRvIGN1cnJlbnQgY29kZSBcblxuLy8gdGhlIGdldHRlcnMgYW5kIHNldHRlcnMsIHNob3VsZCBwcm9iYWJseSBiZSBpbnNpZGUgeW91ciBmYWN0b3J5IGZ1bmN0aW9uIFxuXG4vLyB3aGF0IHdpbGwgd2UgYmUgcGFzc2luZyB0byB0aGUgZmFjdG9yeT8gXG5cbi8vIFdoeSBhIGdldHRlciBhbmQgc2V0dGVyPyBJIGp1c3QgbmVlZCB0byBvdmVyd3JpdGUgdGhlIGRhdGEgYXQgdGhhdCBwYXJ0aWN1bGFyIGluZGV4IHdpdGggdGhlIGRhdGEsIFxuXG4vLyBjYW4ndCBJIHBhc3MgdGhlIHZhbHVlcyB0byB0aGUgc2FtZSBmYWN0b3J5PyBtYWtlIHRoZSBzYW1lIG9iamVjdCBhbmQgdGhlbiB1c2UgdGhhdCBvYmplY3QgdG8gc3BsaWNlIG9yIG92ZXJ3cml0ZSBwcm9wZXJpdGVzPyBcblxuLy8geW91IGNhbiBwcm9iYWJseSBkbyB0aGUgc2FtZSBwcm9jZXNzLCBtYWtlIGFuIG9iamVjdCwgYnV0IHlvdSBuZWVkIHRvIG92ZXJ3cml0ZSB0aGF0IHRvZG8gYW5kIHRoYXQgaW5kZXggd2l0aCB0aGUgbmV3IGluZm8uIFxuXG4vLyBcblxuXG5cbi8vIG9rIHNvIGEgc2VwZXJhdGUgbW9kYWwgaXMgY3JlYXRlZCwgd2l0aCB1bmlxdWUgZWxlbWVudHMsICBcblxuLy8gbm93IHdlIG11c3QgZ2V0IHRoZSB2YWx1ZXMgZm9yIGVhY2ggaW5wdXQgZmllbGQgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBjdXJyZW50IHByb2plY3RzIHRvZG9zID8gXG5cbi8vIHNvbWVob3cgSSBhbHNvIG5lZWQgdG8gaW5jbHVkZSB0aGUgZGF0YXNldCBcblxuXG5cbi8vIGhlcmUgd2UgYXJlIGJhY2sgd2l0aCBhdmVuZ2FuY2UgXG5cbi8vIEkgYW0gcmVjb3ZlcmluZywgSSdtIGdvaW5nIHRvIGRvIGEgbGl0dGxlIHdvcmsgdG9kYXkgXG5cbi8vIHNvIHJpZ2h0IG5vdyBJIHdhbnQgdG8gZWRpdCB0b2RvJ3MgXG5cbi8vIGJ1dHRvbiBpcyBjbGlja2VkIGFuZCB0aGF0IHNob3VsZCBnZW5lcmF0ZSBhIGZvcm0gXG5cbi8vIHRoZSBmb3JtIGlzIGlkZW50aWNhbCB0byBtYWtpbmcgYSB0b2RvLCBcblxuLy8geW91IHdpbGwganVzdCBuZWVkIHRvIGFzc29jaWF0ZSB0aGF0IHBhcnRpY3VsYXIgdG9kbyBcblxuLy8gd2l0aCBhIGRhdGFzZXQsIHNpbWlsYXIgdG8gZGVsZXRpbmcgYSB0b2RvLCBcblxuLy8gb25jZSB0aGUgZWRpdCBidG4gaXMgY2xpY2tlZCwgZ2l2ZSB0aGF0IHRvZG8gYSBkYXRhc2V0IFxuXG4vLyBnZW5lcmF0ZSBmb3JtLCB3aGF0ZXZlciB1c2VyIGVudGVycywgd2lsbCB1cGRhdGUvb3ZlcndyaXRlIHRoZSBpbmZvIFxuXG4vLyBpdCB3b24ndCBjcmVhdGUgYSBuZXcgb25lLCBpdCB3aWxsIGp1c3QgdXBkYXRlL21vZGlmaXkgXG5cbi8vIHlvdXIgcHJldmlvdXMgYXBwcm9hY2ggSSBkb24ndCBiZWxpZXZlIHdpbGwgd29yayBcblxuLy8gYmVjYXVzZSB5b3UgYXJlIHRyeWluZyB0byB1c2UgdGhlIHNhbWUgZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyB0aGF0IHNlZW1zIGxpa2UgaXQgd2lsbCBvbmx5IGNhdXNlIGlzc3VlcywgXG5cbi8vIGxldHMgc2VwZXJhdGUgdGhlbSwgbWVhbmluZyBjb3B5IHRoZSBzZXQtdXAgYW5kIGNvZGUgZm9yIGNyZWF0aW5nIGEgdG9kbyBtb2RhbCBcblxuLy8gc3R5bGUgZXhhY3RseSB0aGUgc2FtZSwgXG5cbi8vIGFkZCB0b2RvLCBhbmQgZWRpdCB0b2RvIGFyZSB0d28gc2VwZXJhdGUgbGlzdGVuZXJzLCBcblxuLy8gb25lIGlzIGZvciBjcmVhdGluZywgdGhlIG90aGVyIGlzIGZvciBtb2RpZnlpbmcsIFxuXG4vLyBsZXRzIGJlZ2luLCB0aGUgYXBwcm9hY2ggc2VlbXMgdmFsaWQsIHN0YXJ0IHdpdGggdGhlIEhUTUwgXG5cbi8vIGJhc2ljYWxseSBjb3B5IHRoZSBjb2RlLCBzbGlnaGx5IGNoYW5nZSBjbGFzcyBuYW1lcywgXG5cbi8vIHNhbWUgc3R5bGVzLCBodG1sLCBjc3MsIHRoZW4gZ3JhYiB0aGUgZWxlbWVudCBhbmQgYWRkIHRoZSBldmVudCBsaXN0ZW5lciBsb2dpYywgXG5cbi8vIHdpdGhpbiB0aGUgbGlzdGVuZXIsIHdlIGFyZSBub3QgYWRkaW5nLCBcblxuXG5cblxuLy8gcGFzcyB0aGUgdXBkYXRlZCBhcnJheSB0byBzdG9yYWdlLCBcblxuLy8gaG93IGNhbiBJIHVwZGF0ZSB0aGUgYXJyYXksIFxuXG4vLyBjYW4gSSBwdXNoIHRoaW5ncyB0byBpdCwgYWRkIHRoaW5ncyB0byBpdCwgXG5cbi8vIGNhbiBJIHVzZSBmaWx0ZXIsIFxuXG4vLyBvayBzbyBub3cgSSBjYW4gZGVsZXRlIGluZGl2aWR1YWwgcHJvamVjdHMgYXMgd2VsbCBhcyB0aGUgcHJvamVjdCBhcyBhIHdob2xlIFxuXG4vLyBob3cgY2FuIEkgcmVmbGVjdCB0aGlzIGNoYW5nZSBpbiBzdG9yYWdlPyBcblxuLy8gdXBkYXRlU3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIHBsYW4gb24gaG93IEkgY2FuIG1ha2UgYW4gdXBkYXRlIHN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyByaWdodCBub3cgSXQgb25seSBkZWxldGVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGhvdyBjYW4gSSB1cGRhdGUgbXkgYXJyYXkgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcyBpbiB0aGUgRE9NPyBcblxuLy8gY2FuIEkgbG9vayBiYWNrIG15IGRlbGV0ZSBidXR0b24gZnVuY3Rpb25hbGl0eSBmb3IgaW5zcGlyYXRpb24/IFxuXG4vLyB0aGF0IGRlbGV0ZXMgZnJvbSBib3RoIHRoZSBhcnJheSBhbmQgaW4gc3RvcmFnZSwgXG5cbi8vIGZpcnN0IGNoZWNrIHRoYXQgb3V0LCBcblxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIHZlcnkgY29uZnVzZWQgb24gaG93IEkgY2FuIGRlbGV0ZSBhIHNpbmdsZSB0b2RvIFxuXG4vLyB1c2luZyB0aGUgXG5cbi8vIGNvbmZ1c2VkIG9uIGhvdyBJIGNhbiBkZWxldGUgYSBzaW5nbGUgdG9kbywgYW5kIHJlZmxlY3QgaW4gdGhlIERPTSwgXG5cbi8vIGJ1dCBhbHNvIGluIHN0b3JhZ2UsIEkgY2FuIHJlbW92ZSBmcm9tIERPTSwgXG5cbi8vIGJ1dCBJIGFtIGdldHRpbmcgYSBsaXR0bGUgbG9zdCBvbiBob3cgdG8gcmVtb3ZlIGl0IGZyb20gc3RvcmFnZSwgXG5cbi8vIEkgd2FudCB0byBzYXkgdXNpbmcgZmlsdGVyIHdvdWxkIGJlIGEgZ29vZCBvcHRpb24gXG5cbi8vIHRvZGF5IHRoZSBmb2N1cyBpcyBkZWxldGluZyBhIHNpbmdsZSB0b2RvIGFuZCByZWZsZWN0aW5nIHRoYXQgXG5cbi8vIHdpdGhpbiB0aGUgc3RvcmFnZSBhbmQgd2l0aGluIHRoZSBET00sIFxuXG4vLyBhbHNvIGlmIEkgZ2V0IHN0dWNrIG9uIHRoYXQsIFxuXG4vLyBlZGl0aW5nIGEgdG9kbywgdGhhdCBpZiB1c2VyIHByZXNzZXMgZWRpdCBidG4sIFxuXG4vLyBnZW5lcmF0ZSB0aGUgbW9kYWwgYWdhaW4sIGFuZCBhbGxvdyB0aGUgdXNlciB0byBlZGl0IHRoYXQgdG9kbyBcblxuLy8gYW5kIHRoZW4gcmVmbGVjdCB0aGF0IGNoYW5nZSBpbiB0aGUgRE9NIGFuZCBpbiBzdG9yYWdlLCBcblxuLy8gSSB3aWxsIGFzayB0aGUgcXVlc3Rpb24gcmlnaHQgYXdheSBiZWNhdXNlIEkgYW0gc3R1Y2ssIFxuXG4vLyBidXQgc3BlbmQgYSBsaXR0bGUgdGltZSBsb29raW5nIG92ZXIgdGhlIGNvZGUsIFxuXG5cblxuXG4vLyBJIG1hZGUgYSBuZXcgZm9sZGVyIGluIG15IHJlcG9zIGNhbGxlZCB0b2RvIGxpc3QtQiBcblxuLy8gdGhlbiBJIGNsb25lZCB3aXRoaW4gdGhlcmUsIHRoZW4gY29waWVkIGFsbCBteSBjb2RlIGZyb20gbXkgbW9kdWxlIFxuXG4vLyBpbnRvIHRoZSBuZXcgcHJvamVjdCwgdGhpbmdzIHNlZW0gdG8gYmUgd29ya2luZyBvayBcblxuLy8gYW0gSSBvayB0byBwdXNoIGFuZCBjb21taXQgY2hhbmdlcywgd2lsbCB0aGVzZSBjaGFuZ2VzIHN0aWxsIGdvIHRvIFxuXG4vLyB0b2RvIGxpc3QtQSA/IFxuXG4vLyByaWdodCBub3cgYSBwcm9ibGVtIEkgc2VlIGlzIHRoYXQgcHJvamVjdHMgXG5cbi8vIGFyZSBub3QgYmVpbmcgYWRkZWQgdG8gcHJvamVjdCAyLCBcblxuLy8gdGhlIHRvZG8ncyB3b24ndCBzaG93LCBhbmQgYW55IHByb2plY3QgdGhhdCdzIG5vdCAxLCBlcmFzZXMgb24gcmVmcmVzaCwgXG5cblxuXG5cblxuLy8gb2sgc28gdG9kYXkgaXMgYSBuZXcgZGF5LCBcblxuLy8gbG9vayBiYWNrIG92ZXIgdGhlIG1lc3NhZ2VzLCBnZXQgYW4gaWRlYSwgXG5cbi8vIHRoZW4gZ3JhYiBzb21lIG9mIHlvdXIgZnVuY3Rpb25zLCBcblxuLy8gdHJ5IHRvIGltcGxlbWVudCB0aGUgcGxhbiB0aGF0IGV4IGNhbWUgdXAgd2l0aCwgXG5cbi8vIHBhc3Mgb2JqZWN0cyBpbnRvIGFycmF5IGFuZCBsb29wIHRocnUgdGhlbSwgXG5cbi8vIGZpcnN0IGxvb2sgb3ZlciB0aGUgbWVzc2FnZXMsICBcblxuXG4vLyBvayBzbyBnbyBpbnRvIGNvZGUgcGVuLCBjb3B5IHRoZSBkaXNwbGF5IGZ1bmN0aW9uIG92ZXIsIFxuXG4vLyB0cnkgdG8gbWFrZSBhIG5ldyBvYmplY3QsIGVhY2ggdGltZSB5b3UgZW50ZXIgZm9ybSBkYXRhLCBcblxuLy8gdGhlbiBhZGQgdGhvc2UgcHJvamVjdHMgdG8gdGhlIGFycmF5LCBcblxuXG5cblxuXG4vLyBvayBzbyB0b2RheSwgdGhlIHVucWl1ZSB0b2RvcyBhcmUgYmVpbmcgZGlzcGxheWVkIFxuXG4vLyBub3cgd2UgbXVzdCBzdHlsZSB0aGUgdG9kbydzIFxuXG4vLyBlYWNoIGJsb2NrIHNob3VsZCBiZSBzdHlsZWQsIFxuXG4vLyBub3QgYSBjb250YWluZXIgdGhhbiBoYXMgYSBzdHlsZSB0aGF0IGhvbGRzIGV2ZXJ5dGhpbmcsIFxuXG4vLyB0cnkgdG8gbWFrZSBzdXJlIGVhY2ggc2V0IG9mIHRvZG8gaXMgYXBwZW5kZWQgdG8gYSBjb250YWluZXIsIFxuXG4vLyB5b3UgYXJlIGFwcGVuZGluZyBldmVyeXRoaW5nIHRvIHRoYXQgc2FtZSBjb250YWluZXIsIFxuXG4vLyBhcHBlbmQgdG8gb25lIGNvbnRhaW5lciwgc3R5bGUgdGhhdCB0aGVuIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciBcblxuXG5cblxuXG5cblxuLy8gb2sgd2UgaGF2ZSBzb21ldGhpbmcgd29ya2luZyBoZXJlLCBcblxuLy8geW91IGhhdmUgdHdvIGZ1bmN0aW9ucywgXG5cbi8vIGF0IGxlYXN0IGRhdGEgaXMgYmVpbmcgcHJpbnRlZCB0byB0aGUgRE9NLCBhbmQgaXMgc3RvcmluZyBpbiBsb2NhbCBzdG9yYWdlIGNvcnJlY3RseSBcblxuLy8gY2hlY2sgeW91ciBmdW5jdGlvbnMgYWdhaW4sIFxuXG4vLyByZW1lbWJlciBvbmUgdG8gY3JlYXRlIHRoZSBlbGVtZW50cy9zdHlsZSwgb3RoZXIgdG8ganVzdCBkaXNwbGF5IHRoZSBjdXJyZW50UHJvamVjdHMgdG9kbydzIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIGFwcGVuZCB2YWx1ZXMsIHN0eWxlLCBcblxuLy8gdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCBqdXN0IGRpc3BsYXkgdGhlbS4gXG5cblxuXG4vLyBsZXQgZ2V0VG9kb0l0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvSXRlbXNcIik7IFxuXG4vLyBsZXQgcGFyc2VUb2RvSXRlbXMgPSBKU09OLnBhcnNlKGdldFRvZG9JdGVtcyk7IFxuXG5cblxuXG4vLyBmb3IgKGxldCB0b2RvIGluIHBhcnNlVG9kb0l0ZW1zKSB7IFxuLy8gICAgICBsZXQgdG9kb0l0ZW0gPSBwYXJzZVRvZG9JdGVtczsgXG5cbi8vICAgICAgbGV0IHZhbHVlSW5Ub2RvID0gcGFyc2VUb2RvSXRlbXNbdG9kb0l0ZW1dOyBcblxuLy8gICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluVG9kbyk7IFxuXG4vLyAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG9JdGVtKTtcbi8vIH1cblxuLy8gcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpO1xuXG5cblxuXG5cblxuLy8gc3RvcmUgdGhlIHRvZG9zIGxpa2UgSSBkaWQgd2l0aCBuYW1lcywgXG5cbi8vIGxvb3Agd2l0aGluIHRoZSBmdW5jdGlvbiwgdGFrZSBpbiBwcm9qZWN0LCBhZGQgdGhlIHZhbHVlcywgXG5cbi8vIHB1c2ggdGhlIHByb2plY3QgYmFjayBpbnRvIHByb2plY3RzIGFycmF5LCBhbmQgdGhlbiBcblxuLy8gcGFzcyB0aGUgcHJvamVjdHNBcnJheSBiYWNrIHRvIERPTSBmdW5jdGlvbiwgYW5kIHN0b3JhZ2UsIFxuXG4vLyBhZGQgdGhlIHRvZG8ncyBvbiBhIHByb2plY3QsIHVwZGF0ZSBpdCBhZ2FpbiBcblxuXG5cblxuLy8gY29uc29sZS5sb2cocGFyc2VUb2RvSXRlbXMpO1xuXG5cbi8vIGhvdyBjYW4gSSBrZWVwIG15IHRvZG8ncyBhZnRlciBwYWdlIHJlZnJlc2g/IFllc3RlcmRheSBpdCBzZWVtZWQgbGlrZSBpdCB3YXMgYSBwcm9ibGVtIGluIGhvdyBJJ20gc3RvcmluZyB0aGVtIGFuZCBob3cgSSBwYXJzZSB0aGVtIFxuXG4vLyBpdCBzZWVtcyBsaWtlIGl0IGlzIGEgc3RvcmFnZSBwcm9ibGVtLCBob3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHRvZG8gYXJyYXkgd2l0aGluIGVhY2ggcHJvamVjdCwgXG5cbi8vIHRyeSB0byBwYXJzZSB0aGUgZGF0YSBsaWtlIHUgZGlkIGJlZm9yZT8gXG5cblxuLy8gbGV0IGdldFRvZG9JdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0l0ZW1zXCIpOyBcblxuLy8gbGV0IHBhcnNlVG9kb0l0ZW1zID0gSlNPTi5wYXJzZShnZXRUb2RvSXRlbXMpOyBcblxuXG4vLyBmdW5jdGlvbiBwYXJzZVRvZG8oKSB7IFxuLy8gICAgICBmb3IgKGxldCBpdGVtIGluIHBhcnNlVG9kb0l0ZW1zKSB7IFxuLy8gICAgICAgICAgIGxldCB0b2RvID0gaXRlbTsgXG4vLyAgICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XG4vLyAgICAgIH1cbi8vIH0gXG5cbi8vIHBhcnNlRGF0YSgpO1xuXG5cbi8vIE9LIHNvIHRoZSBkZWxldGluZyBwcm9qZWN0IG1ldGhvZCB3b3JrcyEhIEkgYW0gbm93IGFibGUgdG8gZGVsZXRlIGEgcHJvamVjdCBmcm9tIG1haW4gYXMgd2VsbCBhcyB0aGUgbmF2YmFyLCBcblxuLy8gbmV4dCBJIGRpZCB0byBhZGQgdGhlIGxvZ2ljIHNvIHRoZSB1c2VyIGNhbiBhZGQgdG9kbydzLCBcblxuLy8gcmVtZW1iZXIgdG9kbydzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdCBvYmogYXJyYXksIFxuXG4vLyBmaXJzdCB3ZSBwcm9iYWJseSBuZWVkIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNhcHR1cmUgdGhlIHZhbHVlIFxuXG4vLyBvbiBlYWNoIGlucHV0IGZpZWxkLCBsZXRzIHN0YXJ0IHRoZXJlLCBcblxuLy8gYSBmdW5jdGlvbiB3aWxsIGJlIG5lZWRlZCB0byBnZXQgdGhlIGNvcnJlY3QgaW5wdXQgZmllbGRzIFxuXG4vLyBhbmQgdGhlbiBnZXQgdGhlIHZhbHVlcyBmcm9tIHRoZW0sIFxuXG5cblxuXG4vLyB0aGlua2luZyBvZiB0aGUgbmV4dCBzdGVwIGFmdGVyIHRoZSBkZWxldGluZyBwcm9qZWN0cywgXG5cbi8vIHRoYXQgd291bGQgYmUgZ2V0dGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGZvcm0gaW5wdXQgYW5kIFxuXG4vLyBwdXNoaW5nIHRoZW0gYmFjayBpbnRvIHRoZSB0b2RvIGFycmF5IHRoYXQgZWFjaCBwcm9qZWN0IGNvbnRhaW5lcnMgXG5cbi8vIHlvdSB3aWxsIG5lZWQgYWNjZXNzIHRvIHRoYXQgdG9kbyBhcnJheSwgdHJ5IGEgc2ltcGxlIGxvZyBmaXJzdCBcblxuLy8gYnV0IHRoZSB0b2RvJ3Mgd2lsbCBiZSBhZGRlZCB0byB0aGVyZSBidXQgYWxzbyBpdCBuZWVkcyB0byBiZSBcblxuLy8gcmVmbGVjdGVkIGluIHlvdXIgRE9NIHRvbywgXG5cbi8vIHNvIHRoaW5raW5nIG9mIHNvbWUgd2F5IHRvIGFjY2VzcyB0aGUgdG9kbyBhcnJheSB3aXRoaW4gdGhlIG9iaiBcblxuXG4vLyBpZiB5b3UgY2FuIGFjY2VzcyBpdCB5b3UgYWRkIHRoZSB2YWx1ZXMgdG8gaXQsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHZhbHVlcyBhcmUgc3RvcmVkIHByb3Blcmx5IHdpdGhpbiBlYWNoIG9iamVjdCwgXG5cbi8vIHlvdSB3YW50IHRvIHJlZmxlY3QgdGhhdCBpbiB0aGUgRE9NLCBhY2Nlc3MgdGhlIHRvZG8gYW5kIGRpc3BsYXkgaXQncyBwcm9wZXJ0aWVzIFxuXG4vLyB0aGVuIGhhdmluZyBhIHdheSB0byBkZWxldGUgdG9kbydzIGFuZCBoYXZpbmcgdGhhdCB1cGRhdGUgXG5cbi8vIHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NLiBcblxuXG4vLyBnZXR0aW5nIHByb2plY3QgSUQgXG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgICBcbi8vICAgICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG5cbi8vICAgICAgbGV0IHByb2plY3RWYWx1ZSA9IHByb2plY3RJbmRleC5pZDsgXG4gICAgIFxuLy8gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWUpO1xuLy8gfSBcblxuXG5cblxuXG5cblxuLy8gZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGdldCB0aGUgSUQncyB3aXRoaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIGFuZCB0aGUgSUQncyB3aXRoaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGNyZWF0ZSBhIGxvb3AgaW5zaWRlIGVhY2ggc2VjdGlvbiBhbmQgZ2V0IHRoZSB2YWx1ZSwgXG5cblxuXG5cbi8vIHdlbGwgeW91IGNhbiBkZWxldGUgdGhlIHByb2plY3QgbmFtZSBhbmQgdGhlIGJ0biBjb250YWluZXIgZnJvbSB0aGUgRE9NLCBcblxuLy8gY2FuIHdlIGZpZ3VyZSBvdXQgYSB3YXkgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBsZXRzIHRha2UgYSBsb29rIGF0IGhvdyB0aGUgdmFsdWUgaXMgc3RvcmVkLCBcblxuLy8gZmlndXJlIG91dCBob3cgdGhlIHZhbHVlcyBhcmUgc3RvcmVkIGFuZCBzZWUgaWYgc29tZWhvdyB5b3UgIFxuXG4vLyBncmFiIGEgdmFsdWUsIG9yIHRoZSBjb250YWluZXIgZGl2IHRoYXQgY29udGFpbnMgdGhlIHZhbHVlLlxuXG5cbi8vIEkgYW0gYWJsZSB0byBncmFiIHRoZSB2YWx1ZXMgd3RpaGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBJIGFtIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZSB3aXRoaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gSSB0aGluayBJIG5lZWQgdG8gdXNlIGEgbG9vcCwgdG8gZ2V0IGFsbCB0aGUgZWxlbWVudHMgd2l0aGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBpZiB0aGUgdmFsdWUncyB0ZXh0IGNvbnRlbnQgbWF0Y2hlcywgc2V0IHRoZSB0ZXh0Q29udGVudCB0byBcIlwiIG9yIGRlbGV0ZSB0aGUgZWxlbWVudCwgXG5cbi8vIHRyeSB0byBsb29wIHRocm91Z2ggdGhlIGVsZW1lbnRzIHdpdGggdGhhdCB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBpZiB2YWx1ZXMgbWF0Y2gsIGRlbGV0ZSB0aGUgdmFsdWUgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uIHRoYXQgbWF0Y2hlcyBtYWluIGNvbnRlbnRzIHZhbHVlLCBcblxuLy8gaWQncywgZWFjaCBwcm9qZWN0IGhhcyBhIHVucWl1ZSBJRCwgY29tcGFyZSBJRCdzLCB3aHkgY2FudCBJIGRvLCBpZiB0aGUgdGV4dENvbnRlbnRzL3N0cmluZ3MgbWF0Y2ggcmVtb3ZlPyBcblxuLy8gSSBnb3QgdGhlIHN0cmluZyB2YWx1ZXMgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIG1haW4sIGFuZCBhbGwgdGhlIGVsZW1lbnRzIGluIHlvdXIgcHJvamVjdHMsIFxuXG4vLyBkb2VzIHRoZSBzdHJpbmcgbWF0Y2ggdGhlIG90aGVyIHN0cmluZywgXG5cbi8vIGRvIElEJ3MgbWF0Y2g/IFxuXG5cblxuXG5cbi8vIHNhbWUgaXNzdWUsIEkgYW0gdHJ5aW5nIHRvIGdyYWIgdGhlIHZhbHVlcywgYW5kIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIGRlbGV0ZSB0aGUgcHJvamVjdCwgXG5cbi8vIGRlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIGJvdGggcGxhY2VzLCBJIGFtIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZSBpbiB0aGUgbWFpbiBzZWN0aW9uLCBcblxuLy8gYW5kIHRoZSBsaXN0IG9uIHZhbHVlcyBpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaG93IGNhbiBJIGRlbGV0ZSBib3RoIGluIHRoZSBzYW1lIHBsYWNlIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgbWFyaywgXG5cbi8vIGp1c3QgY2hlY2sgdG8gc2VlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIERPTSwgc2VlIGlmIHlvdSBjYW4gYWRkIGEgY2xhc3MgdG8gaXQsIFxuXG5cbi8vIHdoaWxlIHdlcmUgd2FpdGluZyBjYW4gd2UgZ2V0IHRoZSBwcm9qZWN0cyBJRD8gXG5cbi8vIGp1c3Qgc2ltcGx5IHRyeSB0byBnZXQgYSBwcm9qZWN0cyBJRC4gYW5kIGxvZyBpdCwgXG5cblxuXG5cblxuXG4vLyBPSyB0b2RheSB0aGUgZ29hbCBpcyB0byBmaWd1cmUgb3V0LCBob3cgdG8gZGlzYWJsZS9leGl0IHRoZSBtb2RhbCwgYW5kIGhvdyB0byBhY3RpdmF0ZSBpdCBcblxuLy8gYmFzZWQgdXBvbiBhIGJ1dHRvbiBjbGljaywgXG5cbi8vIHRoZW4gb25jZSB0aG9zZSBhcmUgZ29vZCwgdGhlbiB3ZSBjYW4gZm9jdXMgb24gdGhlIHN0eWxpbmcgb2YgdGhlIG1vZGFsLCBcblxuLy8gZmlyc3QgbGV0J3MgYWRkIHRoZSBsb2dpYyB0aGF0IGNhbiBleGl0IHRoZSBtb2RhbCwgXG5cbi8vIGdyYWIgdGhlIGlkIG9yIGNsYXNzIGZyb20gSFRNTCwgYW5kIGZpcnN0IGxvZyB0aGUgZWxlbWVudCBjb3JyZWN0bHksIFxuXG4vLyB0aGVuIGFkZCBldmVudCBsaXN0ZW5lciwgdGhhdCBzZXRzIHRoZSBtb2RhbHMgZGlzcGxheSB0byBub25lLCBcblxuLy8gdGhlbiBpZiB0aGUgdXNlciBwcmVzc2VkIHRoZSArIGljb24sIHNldCB0aGUgZGlzcGxheSB0byBmbGV4LCBcblxuLy8gb2sgc28gSSBhbSBhYmxlIHRvIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCwgb3BlbmluZyB0aGUgbW9kYWwgYW5kIGNsb3NpbmcgdGhlIG1vZGFsLCBcblxuLy8gbm93IHlvdSB3aWxsIG5lZWQgdG8gbWFrZSBsb2dpYywgdGhhdCB3aWxsIHNldCB0aGUgZGVmYXVsdCBkaXNwbGF5IG9mIHRoZSBtb2RhbCB0byBub25lLCBcblxuLy8gdGhlbiBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBpdCB3aWxsIHBvcC11cCwgY2FuY2VsIGl0IHdpbGwgbm90IGRpc3BsYXkgXG5cbi8vIEkgdGhpbmsganVzdCBncmFiYmluZyB0aGUgdmFyaWFibGVzIGF0IHRoZSB0b3AgaXMgZmluZSwgYW5kIGp1c3QgaW4gdGhlIGdsb2JhbCBzY29wZSwgXG5cbi8vIHNldCB0aGUgZGlzcGxheSB0byBub25lLCBcblxuLy8gd29ya3MsIHNhdmUgYW5kIGNvbW1pdCwgdGhlbiBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIGRlbGV0ZSBidG4gd29ya2luZywgXG5cbi8vIG5vdyB3b3VsZCBwcm9iYWJseSBiZSB0aGUgYmVzdCB0aW1lIHRvIGRvIHRoYXQsIHNpbmNlIHRoZSBhZGQgYnRuIGlzIHdvcmtpbmcsIG5vdyB3ZSBjYW5cblxuLy8gd29yayBvbiB0aGUgbG9naWMsIHRoYXQgb25jZSBidG4gaXMgY2xpY2tlZCwgZ2VuZXJhdGUgYW5vdGhlciBtb2RhbCwgYXNraW5nIHRoZSB1c2VyIFxuXG4vLyBhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0PyBJdCB3aWxsIGNsZWFyIHRoYXQgcHJvamVjdCBmb3IgdGhlIERPTSBJbiBtYWluIFxuXG4vLyBidXQgYWxzbyBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24sIFxuXG4vLy8gc3R5bGUgdGhlIG1vZGFsLCBvbmUgYnRuIHRvIGNvbmZpcm0gYW5kIHRoZSBvdGhlciBidG4gdG8gY2FuY2VsIHRoZSBvcmRlciwgXG5cbi8vIE9rIHNvIHdlIGhhdmUgdGhlIHByaW50IHZhbHVlcyB0byB0aGUgRE9NIGZ1bmN0aW9uLCBcblxuLy8gaWYgdXNlciBjbGlja3MgcHJvamVjdCBuYW1lLCB2YWx1ZXMgYXBwZW5kIHRvIG1haW4gY29udGFpbmVyLCBcblxuLy8gaWYgdXNlciBwcmVzc2VzLCBhZGQgb3IgZGVsZXRlLCBsb2dpYyBpcyB3aXRoaW4gdGhlIHNhbWUgZnVuY3Rpb24sIFxuXG4vLyBJIGRvbid0IHNlZSB0aGF0IGJlY29taW5nIGEgcHJvYmxlbSwgbXkgdGhpbmtpbmcgaXMgdGhhdCBpdCdzIGJldHRlciB0byBkbyB0aGF0IHRoZXJlIFxuXG4vLyB0aGFuIHBhc3NpbmcgdGhlIHZhcmlhYmxlIHRvIGFub3RoZXIgZnVuY3Rpb24sIG1pZ2h0IGFzIHdlbGwgZG8gdGhhdCBhbGwgdGhlcmUsIFxuXG4vLyBzbyB0aGUgZGVsZXRlIGJ0biwgbWFrZSB0aGUgbWFya3VwIGluIHRoZSBIVE1MIGZpcnN0LCBmb2xsb3cgdGhlIGd1aWRlbGluZXMgYmVmb3JlLCBnbyBzbG93LCBcblxuXG4vLyBtb2RhbCBpcyB3b3JraW5nIGJ1dCBqdXN0IHRyeWluZyB0byBhZGQgc3BhY2UgXG4vLyBiZXR3ZWVuIHRoZSBlbGVtZW50cyB0aGUgY2hlY2sgYW5kIHRoZSB4LCBlbGVtZW50IFxuXG4vLyBvayBnb3QgdGhlIGRlbGV0ZSBidG4gbW9kYWwgd29ya2luZyBhcyBJIHdhbnQgdG8sIG5leHQgSSB3aWxsIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGVsZW1lbnQsIFxuXG4vLyB0aGF0IG9uY2UgY2xpY2tlZCBpdCB3aWxsIGNsb3NlIHRoZSBtb2RhbCwgXG5cbi8vIGRvbnQgZm9yZ2V0IHRvIGFkZCB0aGUgb3ZlcmxheSEgXG5cblxuXG5cbi8vIG5leHQgd2lsbCB3b3JrIG9uIGRlbGV0aW5nIGEgdG9kbywgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVja21hcmssIGl0IHNob3VsZCBkZWxldGUgdGhlIHByb2plY3QgZnJvbSB0aGUgRE9NLCB0aGUgYXJyYXkgXG5cbi8vIGFuZCBJIGJlbGlldmUgZnJvbSBsb2NhbCBzdG9yYWdlIHRvbywgdGhlbiB3b3JrIG9uIHNhdmluZyB0b2RvIGluZm8sIGZyb20gdGhlIG1vZGFsIGFuZCBwdXNoaW5nIGludG8gdGhlIERPTSBhbmQgc3RvcmFnZSB3aGVyZSBcblxuLy8gZWFjaCBwcm9qZWN0IGhhcyBhIGxpc3Qgb2YgdG9kbydzLCBpdCB3aWxsIGFkZGVkIHRoZXJlIHdoaWxlIGFsc28gcmVmbGVjdGluZyB0aGF0IGludG8gdGhlIERPTS4gXG5cbi8vIHllcyBuZXh0IHN0ZXAgaXMgZWl0aGVyIGRlbGV0aW5nIHRoZSBwcm9qZWN0LCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIGJ0biwgYW5kIGdldHRpbmcgYWxsIHRoZSB1c2VyIGluZm8gXG5cbi8vIHRoYXQgd2FzIGVudGVyZWQgYW5kIHNhdmluZyB0aGF0IHRvZG8sIHRvIHRoZSBhcnJheSBvZiB0b2RvJ3MgdGhhdCBlYWNoIHByb2plY3QgaGFzLCBcblxuXG5cblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuXG4vLyBzbyBub3cgd2UgZmlndXJlZCBvdXQgaG93IHRvIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgbW9yZSBwcm9qZWN0cywgXG5cbi8vIGJhc2NpY2FsbHkgY2xlYXIgdGhlIERPTSwgdGhlbiBhZGQgcHJvamVjdHMsIFxuXG4vLyBub3cgYWRkIHRoZSBsb2dpYywgdGhhdCB3aWxsIGdlbmVyYXRlIGEgbW9kYWwsIGZvciB0aGUgdXNlciB0byBjcmVhdGUgYSB0b2RvLCBcblxuLy8gZmlyc3QgSSB3b3VsZCBqdXN0IHRyeSBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIG1heWJlIHNlZSBpZiB5b3UgY2FuIHNwbGl0IHRoZSBjb2RlIHVwIGEgYml0LCBcblxuLy8gcHJpbnQgYSBzaW1wbGUgbWVzc2FnZSB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyIGZpcnN0LCBcblxuLy8gb2sgd29ya3MgZ29vZCwgbm93IHN0YXJ0IGNvbnN0cnVjdGluZyB5b3VyIG1vZGFsLCBmb2xsb3cgYWxvbmcgd2l0aCB0aGUgYXJ0aWNsZSwgb3IgdmlkZW8sIFxuXG4vLyBuZWVkcyB0aXRsZSwgcHJpb3JpdHksIGR1ZSBkYXRlLCBkZXNjcmlwdGlvbiwgXG5cbi8vIHRob3NlIHZhbHVlcyBhcmUgdGhlbiBhZGRlZCB0byB0aGUgdG9kbyBhcnJheSB3aXRoaW4gdGhhdCBzcGVjaWZpYyBwcm9qZWN0LCBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gU28gSSBuZWVkIHRvIHJlY29uc2lkZXIgbXkgYXBwcm9hY2gsIGluc3RlYWQgb2YgaGF2aW5nIHN0b3JhZ2UgcmVmbGVjdCB3aGF0IGlzIGluIHRoZSBET00sIFxuXG4vLyBET00gYW5kIHN0b3JhZ2UgYXJlIHNlcGVyYXRlLCB3aGVuIGEgcHJvamVjdCBuYW1lIGlzIGNyZWF0ZWQsIHNhdmUgdG8gc3RvcmFnZSBidXQgeW91IGFsc28gaGF2ZSBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhbmQgd2hhdGV2ZXIgaXMgaW5zaWRlIHByb2plY3RzIGFycmF5IG5lZWRzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBET00sIGluIHRoZSBjb3JyZWN0IGZvcm1hdCwgeW91IG1heSBoYXZlIHRvIHBhcnNlIG9yIHN0cmluZ2lmeSB0aGUgZGF0YSB0byB3b3JrLCBcblxuLy8gcmVmbGVjdCB3aGF0ZXZlciBpcyBpbiB0aGUgcHJvamVjdHMgYXJyYXkgdG8gdGhlIERPTS4gXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKCkgeyBcbi8vICAgICAgY29uc29sZS5sb2coXCJIZXkgdGhpcyB3b3Jrc1wiKTtcbi8vICAgIH1cbiAgIFxuXG5cbi8vIC0tIG9uZSBpc3N1ZSBJIG5vdGljZSBpcyB0aGF0IGlmIEkgYWRkIGEgcHJvamVjdCBuYW1lLCBJIGhhdmUgdG8gcmVmcmVzaCBmb3IgaXQgdG8gZ2V0IGl0IHRvbyBzaG93LiAhISFcblxuXG4vLyB3aGF0IEkgd2FudCB0byBkbyBuZXh0IGlzIHRvIHRha2UgdGhlIHZhbHVlcy9wcm9qZWN0IG5hbWVzIHRoYXQgYXJlIGluIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYW5kIGFwcGVuZCB0aG9zZSB0byB0aGUgRE9NLCBcbi8vIGZpcnN0IGp1c3QgdHJ5IHRvIGdyYWIgdGhlIGVsZW1uZW50IGFuZCBhcHBlbmQgdmFsdWUgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiB3b3JrIGZyb20gdGhlcmUsIFxuXG5cblxuLy8gT0sgSSBhbSBhYmxlIHRvIGRvIGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24gXG5cbi8vIG5vdyB0cnkgdG8gc2VwZXJhdGUgaXQsIHB1dCB0aGF0IGxvZ2ljIHdpdGhpbiB0aGUgRE9NIE1vZHVsZSwgdGhlbiBvbmNlIHlvdSBnZXQgdGhhdCB3b3JraW5nLCBzdHlsZSB3aXRoaW4gc2VwZXJhdGUgc2hlZXQsIFxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgYmxhaCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2coYmxhaClcbi8vICAgbmV3QXJyYXkucHVzaChibGFoKTtcbi8vIH07XG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IHByb2plY3QgaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgbmV3QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vIH07ICAgIFxuXG5cblxuLy8gdGhpc1xuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgaW5kZXggaW4gc29tZUFycmF5KSB7XG4vLyAvLyAgIGNvbnNvbGUubG9nKGluZGV4KTtcbi8vIGxldCB4ID0gT2JqZWN0LnZhbHVlcyhzb21lQXJyYXkpO1xuXG4vLyAvLyBjb25zb2xlLmxvZyh4KTtcblxuLy8gICBuZXdBcnJheS5wdXNoKHgpO1xuXG4vLyAgIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcbi8vIH07XG5cblxuXG5cblxuXG4vLyBJIHdpbGwgbmV4dCB3cml0ZSBhIGZ1bmN0aW9uIHdpdGhpbiBET00gbG9naWMsIHRoYXQgd2lsbCBnZXQgdGhlIGxvY2FsIHN0b3JhZ2UsIGdyYWIgdGhlIHByb2plY3QgbmFtZXMsIHRoZW4gcHJpbnQgdGhlbSB0byB0aGUgRE9NLCB3aXRoIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiBpZiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBhdHRhY2ggYSBsaXN0ZW5lciwgdGhlbiB3aXRoaW4gbGlzdGVuZXIgbG9naWMgYXBwZW5kIHByb2plY3QgdG8gdGhlIERPTSwgaW4gYm90aCBwbGFjZXMgXG5cbi8vIHlvdSB3aWxsIG5lZWQgdG8gY2xlYXIgbWFpbiBjb250ZW50IHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3IGNvbnRlbnQsIHVzaW5nIHJlcGxhY2UgY2hpbGQsIFxuXG4vLyB5b3UgbmVlZCB0byBtYWtlIHN1cmUgdG8gY29udmVydCB0aGUgb2JqIHRvIGEgc3RyaW5nLCBtYWtlIHN1cmUgaXQncyBpbiB0aGUgcHJvcGVyIGZvcm1hdCBiZWZvcmUgYXBwZW5kaW5nLCBcblxuLy8gaWYganVzdCBuZWVkcyB0byBiZSB0aGUgc3RyYWlnaHQgcHJvamVjdCBuYW1lLCBcblxuLy8gc28gb25jZSBjbGlja2VkIHBvcHVsYXRlIHdpdGggdHdvIGJ1dHRvbnMsIGRlbGV0ZSwgYW5kIGFkZCBidG4sIGlmIGFkZCBidG4gaXMgY2xpY2tlZCwgZ2VuZXJhdGUgZm9ybSB3aGljaCB3aWxsIHNhdmUgZGF0YSBhbmQgYWRkIHRvIHRvZG8ncyB3aXRoaW4gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGFwcGVuZCB0aG9zZSB0b2RvJ3MgdG8gdGhlIERPTSBhcyB0aGV5IGFyZSBhZGRlZCwgYW5kIHJlbW92ZSBpZiB0aGV5IGFyZSBkZWxldGVkLiBcblxuXG5cblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5jbGVhcigpOyBcblxuXG4vLyBJIGFtIHJ1bm5pbmcgaW50byBzb21lIHByb2JsZW1zLCBvbiBzdG9yYWdlIHdpdGggdG9kbyBsaXN0LCBteSBkYXRhIGlzIGJlaW5nIHN0b3JlZCBjb3JyZWN0bHksICBcblxuLy8gYnV0IEkgYW0gbm90aWNpbmcgbXkgcHJvamVjdCBuYW1lcyBhcmUga2VlcCBnZXR0aW5nIG5lc3RlZCBpbnNpZGUgbXVsdGlwbGUgYXJyYXkncywgY3VycmVudGx5IFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhcmUgbWFkZSBpbnRvIG9iamVjdHMgdGhlbiBvYmplY3RzIGFyZSBwYXNzZWQgdG8gYXJyYXkgZm9yIHN0b3JhZ2UsIG9uY2UgdGhlIHBhZ2UgcmVsb2FkcywgXG5cbi8vIEkgcGFyc2UgdGhyb3VnaCB0aGUgZGF0YSBpbiBzdG9yYWdlLCBhbmQgcHVzaCB0aGUgZGF0YSBiYWNrIGludG8gdGhlIGFycmF5LCBzbyB0aGUgZGF0YSBpcyBzYXZlZCwgXG5cbi8vIGxpa2UgSSBzYWlkLCBhcnJheSdzIGFyZSBiZWluZyBuZXN0ZWQgd2l0aGluIG11bHRpcGxlIGxldmVscyBhbmQgSSdtIG5vdCBzdXJlIHdoeS4gXG5cbi8vIHBpY3R1cmUgYXR0YWNoZWQgYW5kIHNvbWUgc25pcHBldHMgb2YgbXkgY29kZSBhdHRhY2hlZCBmb3IgY29udGV4dCwgSSBjYW4gYWxzbyBhdHRhY2ggbXkgcmVwbyBpZiB0aGF0IGhlbHBzIHRvIGZ1cnRoZXIgZGVidWcgdGhpcywgXG5cblxuXG5cblxuXG4vLyBJIHRoaW5rIEkgY2FuIGp1c3QgcHV0IHRoZSBhcnJheSB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTSBsb2dpYyBcblxuLy8gSSBjYW4gcGFzcyB0aGUgcHJvamVjdCBvYmplY3QgdG8gdGhlIFxuXG5cbi8vIHJlYWQgYmFjayBvdmVyIG1lc3NhZ2VzIHRvIGRldGVybWluZSBnYW1lLXBsYW4sIFxuXG4vLyBwcm9wZXJseSBzdG9yZSB0aGUgZGF0YSwgb2JqZWN0cyBhcmUgc3RvcmVkIHdpdGhpbiBhbiBhcnJheSwgdGhlIGFycmF5IGlzIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIHB1dCB0aG9zZSBpdGVtcyB0aGF0IHdlcmUgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSBiYWNrIGludG8gdGhlIGFycmF5LCBzbyB0aGUgYXJyYXkgY2FuIGtlZXAgdGhvc2UgdmFsdWVzLCBcblxuLy8ga2VlcCB0aGUgdmFsdWVzIGluIHN0b3JhZ2UsIHZhbHVlcyBhcmUgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8ga2VlcCB0aGUgY29udGVudHMgb2YgdGhlIGFycmF5IGFuZCBsb2NhbCBzdG9yYWdlLCBcblxuLy8gb2JqZWN0cyBhcmUgc3RvcmVkIHdpdGhpbiBhbiBhcnJheSwgZ2V0IHRoZSBwcm9qZWN0IG5hbWUgb2JqZWN0LCBhZGQgdG8gbG9jYWwgc3RvcmFnZSwgZ2V0IHRoZSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIGFuZCBwYXNzIGJhY2sgaW50byBhcnJheT8/IFxuXG4vLyBub3cgc2VlbXMgbGlrZSBzdG9yYWdlIGRhdGEgaXMgYmVpbmcgb3ZlcndyaXR0ZW4sIGl0J3Mgbm90IHVwZGF0aW5nLCBhbmQgbm90IGtlZXBpbmcgZGF0YSwgXG5cblxuXG5cbi8vIGFuIGFycmF5IHRoYXQgc3RvcmVzIG9iamVjdHMsIFxuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgbWFrZSB0aGUgcHJvamVjdCBuYW1lIHRpdGxlLCBnaXZlIGl0IGFuIElELCBhbmQgdG9kbydzIC8gdG9kbydzIHdpbGwgYmUgYW4gYXJyYXksIFxuXG4vLyBoYXZlIGEgZ2xvYmFsIGFycmF5LCBcblxuLy8gZG91YmxlIGNoZWNrIHlvdXIgZmFjdG9yeSBmdW5jdGlvbiwgXG5cbi8vIGZhY3RvcnkgbXVzdCBtYWtlLCBhIG5hbWUgb2YgcHJvamVjdCwgaWQsLCB0b2RvJ3MgaW4gYW4gYXJyYXksIFxuXG5cbi8vIGhhdmUgdGhlIHByb2plY3QgbmFtZXMgaW4gYW4gYXJyYXkgYW5kIHBhc3MgdGhlIGFycmF5IHRvIGxvY2FsIHN0b3JhZ2UsIHNvIHRoZSB2YWx1ZXMgZG9uJ3QgZ2V0IG92ZXJyaWRkZW4gZWFjaCB0aW1lLiBcblxuLy8gZ2V0IGFuIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlLCB0dXJuIGl0IGludG8gYW4gb2JqIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbiwgXG5cbi8vIEkgd2FudCB0byBtYWtlIHN1cmUgSSBhbSBwcm9wZXJseSBzdG9yaW5nIG15IGRhdGEsIGJvdGggaW4gdGhlIGFycmF5IHRoZSBnbG9iYWwgYXJyYXkgXG5cbi8vIGFuZCB3aXRoaW4gbG9jYWwgc3RvcmFnZSwgaWYgdXNlciBlbnRlcnMgaW5mbywgaXQgc2hvdWxkIHNhdmUgYm90aCBvZiB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBjdXJyZW50bHkgSSBjYW4gYWRkIHZhbHVlcyBhbmQgSSBhbSBwdXR0aW5nIG5hbWUgb2JqZWN0cyB3aXRoaW4gYW4gYXJyYXkgXG5cbi8vIGJ1dCBpdCBpcyBvdmVyd3JpdHRpbmcgZWFjaCB0aW1lIGFuZCBub3Qgc2F2aW5nIHRoZSBkYXRhLCBcblxuLy8gc3RvcmUgdGhlIGFycmF5IGV2ZXJ5IHRpbWUgc2V0SXRlbSBpcyBjYWxsZWQgXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IFxuXG5cbi8vIHNob3VsZCBJIGtlZXAgbXkgZXZlbnQgbGlzdGVuZXJzIGluIGEgc2VwZXJhdGUgbW9kdWxlPyBcblxuLy8gbGV0cyB0ZXN0IGJ5IGltcG9ydGluZyBhbmQgZXhwb3J0aW5nLCBcblxuLy8gT2sgaW5wdXQgaXMgY2xlYXJlZCwgbm93IEkgbmVlZCB0byBmb2N1cyBvbiBnZXR0aW5nIHRoZSB2YWx1ZSBhbmQgcGFzc2luZyBpdCB0byBzdG9yYWdlLiBcblxuLy8gZ2V0IHRoZSB2YWx1ZSwgbG9nIHRoZSB2YWx1ZSwgc2F2ZSB0byBzb21lIHR5cGUgb2YgZGF0YSBzdHJ1Y3R1cmUsIFxuXG4vLyBcblxuXG4vLyBPSyBzbyBJJ20gc29ydGEgb24gdGhlIHJpZ2h0IHRyYWNrIGhlcmUsIEkgYW0gZ2V0dGluZ3RoZSB1c2VyIHZhbHVlLCBhbmQgcGFzc2luZyBpdCBhIGxvY2FsIHN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyBJIG5lZWQgb25lIGZ1bmN0aW9uIHRvIHNldCB0aGUgaXRlbSwgdGhlIHByb2plY3QgbmFtZSBcblxuLy8gYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIG1heWJlIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IGFsbCB0aGUgYWRkZWQgdG9kbydzIG9mIHRoZSBwcm9qZWN0LCBcblxuLy8gYW5kIEkgYmVsaWV2ZSB5b3UgbmVlZCB0byB1c2Ugb2JqJ3MgaW5zdGVhZCBvZiBhcnJheSdzIFxuXG4vLyBiZWNhdXNlIHRoZSBrZXkgb2YgdGhlIG9iaiA9PT0gcHJvamVjdCBuYW1lLCB0aGUgdmFsdWUvcyBvZiB0aGUgcHJvamVjdCA9PT0gdGhlIHRvZG8ncyA/Pz8gXG5cblxuXG4vLyBmaXJzdCBsZXRzIGZpeCBvdXIgc3RvcmFnZSBmdW5jdGlvbnMgdG8gdXNlIG9uZSBzZXQgYW5kIG9uZSBnZXQgZnVuY3Rpb24sIFxuXG4vLyB3ZWxsIEknbSBjb25mdXNlZCBvbiBzZXR0aW5nIGFuZCBnZXR0aW5nIGl0ZW1zLCBJIHRyaWVkIHRvIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbiBidXQgaXQgZGlkIG5vdCB3b3JrLCBcblxuLy8gb25lIGZ1bmN0aW9uIHNob3VsZCBzZXQgdGhlIGl0ZW0sIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQgcmV0cmlldmUgdGhlIGl0ZW0vcHJvamVjdCBuYW1lIGZyb20gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIHRoZW4gb25jZSB0aGUgcHJvamVjdCBpcyByZXRyaWV2ZWQsIGNyZWF0ZSBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBhZGQgdG9kbydzLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWUgZGF0ZSwgXG5cblxuLy8gbWFrZSB0aGUgcHJvamVjdCBuYW1lIGFuIG9iaiwgXG5cbi8vIGhvdyB3aWxsIEkgc3RvcmUgbXkgZGF0YT8gSG93IGNhbiBJIGNvcnJlY3RseSBzdG9yZSBteSBkYXRhPyBcblxuLy8gbG9vayBvdmVyIG9sZCBwb3N0cyB0byBnYW1lcGxhbiwgIFxuXG5cbi8vIEhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgcHJvamVjdHMgbmFtZSBpbiB0b2RvLCBcblxuLy8gb25jZSBzdG9yZWQgd3JpdGUgYSBmdW5jdGlvbiB3aGljaCBkaXNwbGF5cyB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UsIHRvIHRoZSBET00uIFxuXG4vLyB3aGF0IHR5cGUgb2YgZGF0YSB3aWxsIG15IHByb2plY3RzIGJlPyBJIHRoaW5rIG9iaidzLCBrZXkgaXMgcHJvamVjdCBuYW1lLCBpdCdzIHRvZG8ncyBhcmUgdGhlIHZhbHVlcywgXG5cbi8vIHdvcmsgb24gY2hhbmdpbmcgdGhlIHByb2plY3QncyBuYW1lIHRvIGFuIG9iaiwgaW5zdGVhZCBvZiBhbiBhcnJheSBcblxuLy8gaG93IGNhbiBJIGFkZCBpdGVtcyB0byBhbiBvYmo/IFxuXG4vLyBjYW4gSSBqdXN0IHBhc3MgdGhlIGFyciB0byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggd2lsbCBjcmVhdGUgYSBwcm9qZWN0IG5hbWUgb2JqLCBrZXkgaXMgbmFtZSB2YWx1ZS9zIGFyZSB0aGUgdG9kbydzXG5cbi8vIEkgd2FudCB0byBwcm9wZXJseSBzdG9yZSBwcm9qZWN0IG5hbWVzIGludG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBydW5uaW5nIGludG8gYSBwcm9ibGVtIHRoYXQgSSB3YW50IHRvIG1ha2UgYSBwcm9qZWN0IG5hbWUgb2JqLCBcblxuLy8gdGhlbiBwYXNzIHRoYXQgb2JqIHRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0ganVzdCBoYXZpbmcgdHJvdWJsZSwgd2l0aCBteSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuXG5cblxuXG5cblxuXG5cbi8vIGNoZWNrIGFycmF5IGFuZCBsb2NhbCBzdG9yYWdlLFxuXG4vLyBsb2NhbCBzdG9yYWdlIGFuZCBhcnJheSBzZWVtcyB0byBiZSB3b3JraW5nIGZpbmUsIGl0IGlzIGFkZGluZyBvbnRvIHRoZSBjdXJyZW50IHNlbGVjdGlvbnMsXG5cbi8vIEkgdGhpbmsgbmV4dCB3b3VsZCBiZSB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHByb2plY3QgbmFtZXMsIHRvIGJlZ2luIGFkZGluZyB0by1kbydzIHRvIHByb2plY3RzXG5cbi8vIG9rIHNvIGxvb2tpbmcgYXQgdGhlIHByb2plY3QgZm9yIGluc3BpcmF0aW9uLCBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIHNhdmVkIHRvIGFuIGFycmF5IGFuZCBzdG9yYWdlLCBcblxuLy8gdGhlbiBpZiB0aGUgcHJvamVjdCBuYW1lcyBhcmUgY2xpY2tlZCwgdGhleSBhcmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZW4gb25jZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gY2xpY2sgYSBhZGQgYnRuIG9yIGEgdHJhc2ggYnRuLCBcblxuLy8gYWRkIGJ0biB3aWxsIG1ha2UgYSBmb3JtIGZvciB0b2RvcyB0byBiZSBhZGRlZCwgdGhlbiBvbmNlIGFkZGVkIHRob3NlIHRvZG9zIHdpbGwgYmUgZGlzcGxheWVkLCBcblxuLy8gZGVsZXRlIGJ0biB3aWxsIHBlcm1hbmF0ZWx5IGRlbGV0ZSB0aGUgdG9kby90YXNrLiBcblxuLy8gaG93IHRvIHByZXZlbnQgZHluYW1pY2FsbHkgY3JlYXRlZCBlbGVtZW50IEpTIGVsZW1lbnRzIGZyb20gZm9ybWluZyB3aGVuIGZ1bmN0aW9uIGlzIGNhbGxlZD8gXG5cbi8vIGZpeCB1cCBjdXJyZW50IGNvZGUgdG8gdXNlIG1vZHVsZXMsIG1vdmUgdG8gb3duIGZ1bmN0aW9uIFxuXG4vLyBzZXBlcmF0aW5nIHRoZSBjb2RlIGlzIG5vdCB3b3JraW5nLCBjYW4ndCBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdGhlcmUsIFxuXG4vLyBJIHdhbnQgdG8gdXNlIHRoZSBzYW1lIGxvZ2ljIEkgaGFkIGJlZm9yZSBidXQgdG8gc3BsaXQgdGhlIGxvZ2ljIHVwIGludG8gZGlmZmVyZW50IG1vZHVsZXMsIFxuXG4vLyB0YWtlIHRoZSBkaXYgZWxlbWVudCBcblxuLy8gd2hlbiB5b3UgY2xpY2sgb24gYSBwcm9qZWN0IG5hbWUsIHRoYXQgcHJvamVjdCBuYW1lIHNob3VsZCBhcHBlYXIgaW4gdGhlIG1haW4gc2VjdGlvbiAoZmluZSkgXG5cbi8vIEl0IHNob3VsZCBhbHNvIGFkZCB0aGUgYWRkIHRvZG8gYnRuIGFsb25nIHdpdGggY2FuY2VsIGJ0biBcblxuXG5cbi8vIHdvcmsgb24gZml4aW5nIHRoZSBidG4gaXNzdWUsIGNyZWF0aW5nIG11bHRpcGxlIGVsZW1lbnRzIG9uIGJ0biBjbGljaywgXG5cbi8vIGlmIHRoZSB1c2VyIHZhbHVlIGlzIGVtcHR5IGRpc2FibGUgdGhlIGJ0biBvciBoaWRlIGl0LCBcblxuLy8gSSBoYXZlIHRyaWVkIGJvdGggbWV0aG9kcyB3aXRoIG5vIGx1Y2ssIFxuXG4vLyBJIHdhcyB3b3JraW5nIHdpdGggc29tZW9uZSB5ZXN0ZXJkYXksIGFuZCBpdCBzZWVtZWQgbGlrZSB0aGUgcmlnaHQgbWV0aG9kLCBcblxuLy8gYnV0IEkgYW0gdmVyeSBjb25mdXNlZCBvbiB3aHkgaXQgaXMgbm90IHdvcmtpbmcsIEkgd291bGQgdGhpbmsgcGxhY2luZyBpdCBiZWZvcmUgdGhlIGZ1bmN0aW9uIGNhbGwgd291bGQgZG8gdGhlIHRyaWNrLCBcblxuLy8gSSB3aWxsIGV4cGVyaWVtZW50IHdpdGggd2hlcmUgdGhlIGNvZGUgaXMgcGxhY2VkLiBcblxuXG4vLyBmaWd1cmluZyBvdXQgdGhlIGxvZ2ljIGZvciB0aGUgYnV0dG9ucywgdXNlciBzaG91bGQgYmUgYWJsZSB0byBhZGQgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG4vLyBvbmUgcHJvamVjdCBhdCBhIHRpbWUsIGlmIHVzZXIgZW50ZXJzIG5vdGhpbmcsIGRpc2FibGUgYnRuLCBcblxuLy8gaWYgc29tZXRoaW5nIGNoYW5nZXMgaW4gdGhlIGlucHV0IGZpZWxkLCByZS1lbmFibGUgdGhlIGJ0biAgXG5cbi8vIEkgYW0gaGF2aW5nIHRyb3VibGUgbG9nZ2luZyB0aGUgc3RhdGVtZW50IHdpdGhpbiB0aGUgaW5wdXQgbGlzdGVuZXIsIFxuXG4vLyBwcmFjdGljZSBpbiBzZXBlcmF0ZSBmaWxlLCBJIHdhcyBzb21laG93IGFibGUgdG8gZ2V0IGl0IHRvIHdvcmsgeWVzdGVyZGF5LCBcblxuLy8gcHJhY3RpY2UgaW4gYSBzZXBlcmF0ZSwgaWYgbm8gbHVjayBtb3ZlIG9udG8gZ2VuZXJhdGluZyB0aGUgaW5wdXQgZmllbGQgYmFzZWQgb24gd2hlbiB1c2VyIFxuXG4vLyBwcmVzc2VzIHRoZSB0b2RvIGJ0bi4gXG5cbi8vIHNwZW5kIHRoZSByZXN0IG9mIHRoZSB0aW1lLCB0cnlpbmcgdG8gZmlndXJlIG91dCBhbiBpbnB1dCBmb3JtLCBcblxuLy8gc28gd2l0aCB0aGUgcG9wLXVwIGZpZWxkLCBkb24ndCBmb3JnZXQgdG8gdXNlIHRoZSBzYW1lIGxvZ2ljIGFzIGxhc3QgdGltZSB3aXRoIGRpZGFibGluZyBidG4gYXQgdGhlIGNvcnJlY3QgbW9tZW50IFxuLy8gb25jZSBidG4gaXMgY2xpY2tlZCBoYXZlIHRoZSBzYW1lIHBvcC11cCBmaWVsZCBhcyB5b3UgZGlkIHdpdGggbGliYXJ5LCBcblxuLy8geW91IHdpbGwgcHJvYmFibHkgbmVlZCBhIGNvbnRhaW5lciB0aGVuIGEgZGl2IHRoYXQncyBhcHBlbmRlZCB0byBpdCB3aXRoIHRoZSBhY3R1YWwgY29udGVudCwgXG5cbi8vIGNvbnRhaW5lciBhYnNvbHV0ZSwgZGl2IGlzIHJlbGF0aXZlIFxuXG4vLyB0aGVuIHlvdSB3aWxsIG5lZWQgYW4gaW5wdXQgZm9yIG5hbWUsIFxuXG4vLyBkdWUgZGF0ZSwgbm90ZXMgY2FuIHVzZSB0ZXh0IGFyZWEgYW5kIGRlc2NyaXB0aW9uLCBcblxuLy8gZmluZCBhIHdheSB0byBhcHBlbmQgdG8gbWFpbiBwcm9qZWN0IHNlY3Rpb24sIHlvdSBjYW4gZGVsZXRlIGl0LCBvciBjaG9vc2UgdG8gYWRkIG1vcmUgdG9kb3MgXG5cbi8vIHRoYXQgZ28gd2l0aCB0aGUgc3BlY2lmaWMgcHJvamVjdC4gIFxuXG5cblxuXG4vLyBnZXQgZmFtaWxhciB3aXRoIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBhcHAgLiBcblxuLy8gdGhlIGFkZCBwcm9qZWN0IGJ0biBpcyBub3cgd29ya2luZywgXG5cbi8vIG5vdyB5b3UgbmVlZCB0byBjb25zaWRlciBob3cgeW91ciBwcm9qZWN0IG5hbWVzIGFyZSBnb2luZyB0byBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cbi8vIHRoZSBuYW1lcyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBvbmNlIGNsaWNrZWQgdGhleSBzaGFsbCBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIHlvdSBjbGljayBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdGhlIHRvIGRvIGZvcm0gc2hvdWxkIHBvcC11cCwgXG5cbi8vIHJlbWVtYmVyIG9uZSBpbnB1dCBmb3JtIGF0IGEgdGltZSwgeW91IG1heSBoYXZlIHRvIGRpc2FibGUgdGhlIGJ0biBhbmQgcmUtZW5hYmxlIHRoZSBidG4sIFxuXG4vLyBiZWZvcmUgbW92aW5nIG9uIEkgd291bGQgYWxzbyBjaGVjaywgYW5kIHJldmlldyB5b3VyIGN1cnJlbnQgY29kZSwgcmVtb3ZlIGNvbW1lbnRlZCBvdXQgY29kZSB0aGF0IGRvZXMgbm90aGluZyBidXQgdGFrZSB1cCBzcGFjZSBcXFxuXG4vLyBjaGVjayB0aGUgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zLCBtYWtlIHN1cmUgaXQgbWFrZXMgc2Vuc2UgdG8geW91LCBiZXR0ZXIgdG8gZG8gaXQgbm93LCBjaGVjayBpdCBvdXQgXG5cbi8vIHBhcnRpYWxseSBoYXZlIHRoZSBsb2dpYywgdGhhdCBnZW5lcmF0ZXMgaW5wdXQgZmllbGQsIFxuXG4vLyB0cnkgdG8gc2VwZXJhdGUgdGhlIGxvZ2ljLCBncmFiIHRoaXMgZWxlbWVudCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiBcblxuLy8gZ3JhYiB0aGUgZWxlbWVudCBhZGQgYSBsaXN0ZW5lciB0byBpdCwgcGVyZm9ybSB0aGUgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIHRoZXJlLCBcblxuLy8gdGhlbiBjYWxsIHRoZSBET00gbW9kdWxlIHRvIGJlZ2luIGFkZGluZyBpdCdzIHByb3BlcnRpZXMuICBcblxuLy8gaGVsbG8gZXZlcnlvbmUsIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0byBkbywgXG5cbi8vIG92ZXJhbGwgdHJ5aW5nIHRvIGtlZXAgbXkgRE9NIGxvZ2ljIGFuZCBldmVudCBsaXN0ZW5lcnMgaW4gc2VwZXJhdGUgbW9kdWxlcyBcblxuLy8gSSBhbSB0cnlpbmcgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCBmcm9tIHRoZSBET00gbW9kdWxlIFxuXG4vLyBJIGFtIGV4cG9ydGluZyB0aGUgZnVuY3Rpb24gdGhhdCBjb250YWlucyB0aGUgdmFyaWFibGUsIFxuXG4vLyB0aGVuIGltcG9ydGluZyBpdCBidXQgd2hlbiBJIHRyeSB0byBhY2Nlc3MgdGhlIGVsZW1lbnQgaW4gdGhlIGxpc3RlbmVyIG1vZHVsZSwgXG5cbi8vIHVzaW5nIElELCBjbGFzcywgcXVlcnkgc2VsZWN0b3IsIEkganN1dCBnZXQgdW5kZWZpbmVkIGJhY2ssIFxuXG4vLyBJJ20gcmVhbGx5IG5vdCBzdXJlIHdoeSB0aGlzIGlzIGhhcHBlbmluZywgSSBoYXZlIG5vdCByYW4gaW50byB0aGlzIGlzc3VlIHlldCwgXG5cbi8vIGltcG9ydGluZyBhbmQgZXhwb3J0aW5nIGFuZCB1c2luZyBmdW5jdGlvbnMvdmFyaWFibGVzIGZyb20gb3RoZXIgbW9kdWxlcyBzZWVtZWQgdmVyeSBzdHJhaWdodGZvcndhcmQsIFxuXG4vLyBJIHdvdWxkIGp1c3Qgd29yayBvbiB0aGUgZnVuY3Rpb24gaW4gdGhlIG1lYW50aW1lLCBrZWVwaW5nIGV2ZXJ5dGhpbmcgd2l0aGluIHRoZSBzYW1lIGZpbGUsIFxuXG4vLyB3b3JrIG9uIGlzc3VlIG9uIGNsaWNraW5nIHByb2plY3QgbmFtZSBpbiBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBpdCBzaG91bGQgbm90IGFwcGVuZCBtdWx0aXBsZSBidG5zLiBcblxuLy8gdGhhdCB3aWxsIGNhdXNlIGlzc3VlcyBcblxuLy8gd2VsbCB0aGlua2luZyBnZW5lcmFsbHksIHNpbWlsYXIgdG8gdGhlIHByZXZpb3VzIGlzc3VlLCBcblxuLy8gSSBuZWVkIHRvIHNvbWVob3cgZGlzYWJsZSB0aGUgYnRuL25hbWUgb2YgdGhlIGVsZW1lbnQsIGFmdGVyIGl0IGhhcyBiZWVuIGNsaWNrZWQgXG5cbi8vIHNvIHRoZSB1c2VyIGNhbm5vdCBhZGQgYW5vdGhlciBidG4sIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgYnRuLCBhZnRlciBjbGlja2luZyB0aGUgYnRuLCBcblxuLy8gSWYgdGhlIHVzZXIgdmFsdWUgbWF0Y2hlcyB3aGF0IGlzIGFscmVhZHkgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG5cbi8vIGZpcnN0IHdvcmsgb24gdGhlIGJ0biBhcHBlbmRpbmcgaXNzdWUsIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lIGFnYWluLCBcblxuLy8gaXQgd2lsbCBrZWVwIGFkZGluZyBidG4ncywgZG9uJ3QgYWRkIG1vcmUgYnRuJ3MgXG5cbi8vIGRvbid0IGFkZCB0aGUgcHJvamVjdCBhZ2FpbiwgaWYgaXQgYWxyZWFkeSBFWElTVFMgSU4gVEhFIE1BSU4gQ09OVEFJTkVSIFxuXG4vLyBOT1cgVE9HR0xJTkcgQkFDSyBBTkQgRk9SVEggQkVUV0VFTiBUV08gUFJPSkVDVFMgXG5cbi8vIFlPVSBBUkUgU0lNUExZSU5HIFJFUExBQ0lORyBUSEUgUFJPSkVDVCBXSVRISU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIE9OTFkgT05FIFBST0pFQ1QgQ0FOIEJFIFNIT1dOIElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgdG8gc3RvcCBhcHBlbmRpbmcgbXVsdGlwbGUgcHJvamV0J3MgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0IGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG4vLyB0aGUgcHJvYmxlbSBzZWVtcyB0byBiZSB0aGUgYnV0dG9ucyBhcHBlbmRpbmcsIEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIHByZXZlbnQgdGhlIGJ0bidzIGZyb20ga2VlcGluZyBvbiBhcHBlbmRpbmcsIFxuXG4vLyBpZiB0aGUgYnRuIGFscmVhZHkgZXhpc3RzIHRoZSBtYWluIGNvbnRhaW5lciwgdGhlbiBkb24ndCBhcHBlbmQsIG9yIGRpc2FibGUsIGhpZGUsIG9yIHJlbW92ZSBlbGVtZW50IFxuXG4vLyBJIGFtIHJ1bm5pbmcgaW50byBzb21lIG1hbnkgcHJvYmxlbXMgd2l0aCB0byBkbyBsaXN0LCBcblxuLy8gSSBhbSB0cnlpbmcgdG8ga2VlcCB0aGluZ3MgaW4gbW9kdWxlcyBhbmQga2VlcCB0aGUgbG9naWMvZXZlbnQgbGlzdGVuZXJzIHNlcGVyYXRlIGZyb20gdGhlIERPTSBMb2dpYywgXG5cbi8vIEkgd2FudCBhY2Nlc3MgdG8gdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBzbyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgaW4gdGhlIGxpdHRsZSBzaWRlYmFyIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIERPTSwgXG5cbi8vIHdlbGwgcmlnaHQgbm93IEkgYW0gcGVyZm9ybWluZyBET00gc3R1ZmYgd2l0aCBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBidXQgdGhhdCBlbGVtZW50IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdGhlIGJ0biBpcyBjbGlja2VkLCBcblxuLy8gSSBndWVzcyBteSBxdWVzdGlvbiBpcyBjYW4gSSBrZWVwIG15IGN1cnJlbnQgbG9naWMsIHdpdGhpbiBteSBET00gbW9kdWxlPyBcblxuLy8gVGhlIHByb2JsZW0gaXMgdGhhdCBJIHdhbnQgdG8gYWNjZXNzIGEgcGFydGljdWxhciBidXQgdGhhdCBlbGVtZW50IGlzIGNyZWF0ZWQgd2l0aGluIGEgbGlzdGVuZXIsIFxuXG4vLyBiYXNpY2FsbHkgdGhlIHVzZXIgZW50ZXJzIG5hbWUgb2YgcHJvamVjdCBwcmVzc2VzIGFkZCBidG4sIHRoZSB2YWx1ZSBnZXRzIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgdGhlIERPTSBlbGVtZW50IFxuXG4vLyBzdWNoIGFzIGFwcGVuZGluZyB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBhbmQgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG5cbi8vIFJ1bm5pbmcgaW50byBhIGxvdCBvZiBwcm9ibGVtcyB3aXRoIHRvIGRvIFxuXG4vLyBiYXNpY2FsbHkgSSB3YW50IHRvIGFjY2VzcyBhbiBlbGVtZW50IGluIGEgZGlmZmVyZW50IG1vZHVsZSBcblxuLy8gcHJvYmxlbSBpcyB0aGF0IGVsZW1lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCB3aXRoaW4gYW4gZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBJIHdvdWxkIGxpa2UgdG8ga2VlcCBteSBET00gYW5kIGxvZ2ljIHN0dWZmIHNlcGVyYXRlLCBcblxuLy8gY3VycmVudGx5IEkgZ3JhYmJlZCB0aGUgZWxlbWVudCBpbiB0aGUgRE9NIG1vZHVsZSwgYW5kIGFkZGVkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGl0LCBcblxuLy8gbm93IEkgaGF2ZSB0byB1c2UgbG9naWMsIHRvIG1ha2Ugc3VyZSB0aGUgdXNlciBjYW5ub3Qga2VlcCBhZGRpbmcgdGhlIHNhbWUgYnRuIHRvIHRoZSBET00gYmFzZWQgb24gYnRuIGNsaWNrLCBcblxuLy8gYmFzaWNhbGx5IG15IHF1ZXN0aW9uIGlzIG15IGN1cnJlbnQgZG9tTG9naWMgbW9kdWxlIG9rPyBBZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgYW5kIGxvZ2ljIHdpdGhpbiB0aGUgZG9tIG1vZHVsZSBcblxuLy8gSXQgZG9lcyBub3Qgc2VlbSByaWdodCBidXQgSSBkb24ndCBzZWUgYW55IG90aGVyIHdheSB0byBkbyB0aGlzLiBcblxuLy8gaG93IGNhbiBJIHN0b3AgdGhlIGFkZCAtdG9kbyBidG5zIGZyb20gYXBwZW5kaW5nIHVwb24gZWFjaCBidXR0b24gY2xpY2s/IFxuXG4vLyBldmVyeXRoaW5nIGlzIGF0dGFjaGVkIHdpdGhpbiBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBjbGljayBhZGQgcHJvamVjdCBidG4gZm9ybSBpcyBnZW5lcmF0ZWQsIGFkZCBidG4gaXMgcHJlc3NlZCB2YWx1ZSBpcyBzYXZlZCBcblxuLy8gdGhhdCB2YWx1ZSBpcyBwYXNzZWQgdG8gYW5vdGhlciBmdW5jdGlvbiwgd2VsbCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHRoZW4sIFxuXG4vLyBjYW4gd2UgY2FsbCB0aGUgZnVuY3Rpb24gYXQgYSBkaWZmZXJlbnQgdGltZSwgd2h5PyBcblxuLy8gc2hvdWxkbnQgaXQgYmUgcGFzc2VkIGFuZCBjYWxsZWQgYXMgc29vbiBhcyB5b3UgZ2V0IHZhbHVlPyBcblxuLy8gY2FuIEkganVzdCBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIG9uZSB0aGF0IHN0b3JlcyB0aGUgdXNlciB2YWx1ZSwgXG5cbi8vIG9uZSB0aGF0IHJldHVybnMgdGhlIHVzZXIgdmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTT8gXG5cbi8vIHlvdSBwYXNzIHRoZSB2YWx1ZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gdGhhdCBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdXNlclZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00vY29udGFpbmVycyBcblxuLy8gY2FwdHVyZSBpdDtzIHJldHVybiB2YWx1ZSBmcm9tIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhhdCBmdW5jdGlvbiwgXG5cbi8vIHNvIGxldHMgdHJ5IHRvIG1ha2UgYW5vdGhlciBmdW5jdGlvbiAxIHRoYXQgdGFrZXMgdGhlIHZhbHVlIGFuZCBhcHBlbmRzIHRvIGNvbnRhaW5lciwgRE9NIFxuXG4vLyBJIHdpbGwgbm93IHRyeSB0byBhZGQgdGhlIGNhbGVuZGVyIG9wdGlvbiB0byBteSB0b2RvIGZvcm0gXG5cbi8vIGFub3RoZXIgd2hpY2ggdGFrZXMgdGhhdCBmdW5jdGlvbiBhYm92ZSBhbmQgYWRkcyBhIGxpc3RlbmVyIHRvIGl0LCB1c2luZyB0aGUgbG9naWMgaW5zaWRlIC4gXG5cbi8vIGV4cGllcm1lbnQgd29ya2luZyB3aXRoIHR3byBmdW5jdGlvbnMsIHNhdmluZyBvbmUgZnVuY3Rpb24gdG8gdmFyaWFibGUsIGFkZGluZyB0aGUgRE9NIHN0dWZmIHJldHVybiBhIHZhbHVlLCBcblxuLy8gdGFrZSB0aGF0IGZ1bmN0aW9uIGV4cHJlc3Npb24gYWRkIGEgbGlzdGVuZXIgdG8gaXQuIFxuXG4vLyB3ZWxsIHRoZSBwcm9ibGVtIGlzIHRoYXQgZXZlcnkgdGltZSBJIGNsaWNrIHRoZSBhZGQgcHJvamVjdCBidG4gXG5cbi8vIGl0IHdpbGwga2VlcCBhcHBlbmRpbmcgbW9yZSBhZGQtdG9kbyBidG5zIHRvIHRoZSBET00sIFxuXG4vLyBiZWNhdXNlIHdoZW4gdGhlIGZvcm0gcG9wcyB1cCBcblxuLy8gYW5kIHRoZSB1c2VyIGhpdHMgdGhlIGFkZCBidG4sIFxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIERPTSBpcyBjYWxsZWQsIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBpc29sYXRlIHRoZSBwcm9qZWN0IHNlY3Rpb24gbmFtZSBlbGVtZW50PyBcblxuLy8gd2VsbCB3aGF0IEkgd2FzIHRoaW5raW5nIG9mIHllc3RlcmRheSwgXG5cbi8vIGlzIGNhbiBJIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbj8gXG5cbi8vIGNhbiB0aGF0IGZ1bmN0aW9uIHN0b3JlIGEgdmFyaWFibGU/IHVzZXJWYWx1ZT8gXG5cbi8vIHRoZW4gY2FuIHRoYXQgZnVuY3Rpb24gYmUgY2FsbGVkPyBcblxuLy8gSSdtIG5vdCBldmVuIHN1cmUgd2hhdCB0aGUgaGVsbCB0byBldmVuIGRvIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZCB3aXRoaW4gdGhlIGxpc3RlbmVyLCBcblxuLy8gc28gZXZlcnkgdGltZSB5b3UgY2xpY2sgdGhhdCBidG4gb3IgcHJvamVjdCBuYW1lLCBpdCB3aWxsIGtlZXAgbWFraW5nIGJ0bnMgXG5cbi8vIGRldGVybWluZSB3aGVuIGl0J3MgdGltZSB0byBhcHBlbmQgdG8gdGhlIERPTSA/XG5cbi8vIG9uZSBmdW5jdGlvbiB0byBzdG9yZSB2YWx1ZSBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIHRha2UvYWNjZXNzIHRoYXQgdmFsdWUgYW5kIHRoZW4gYXBwZW5kIHRvIERPTSBcblxuLy8gc3RvcmUgdGhlIHZhbHVlLCB0aGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB0aGVyZSwgXG5cbi8vIHRoZW4gIiwiXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbi8vIGltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbiBpbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJheVN0b3JhZ2VTZXRJdGVtKG5hbWUpIHsgXG5cbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3QtTmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkobmFtZSkpOyAgXG4gICAgXG4gICAgXG4gICAgXG59ICBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFycmF5U3RvcmFnZShpdGVtKSB7IFxuLy8gICAgIGxldCB0aGlzUHJvamVjdCA9IGl0ZW07IFxuXG4vLyAgICAgY29uc29sZS5sb2codGhpc1Byb2plY3QpO1xuLy8gfVxuXG5cbi8vIHdoYXQgcHJvcGVydGllcyB3b3VsZCB0aGUgdXBkYXRlU3RvcmFnZSBmdW5jdGlvbiBoYXZlPyBcblxuLy8gd2hhdCB3b3VsZCBpdCB0YWtlIGluPyBcblxuLy8gSSB0aGluayB5b3UgbWlnaHQgaGF2ZSB0byB1cGRhdGUgdGhlIGFycmF5LCBcblxuLy8gb3IgZmlsdGVyIG91dCB0aGUgaXRlbXMgdGhhdCB3ZXJlIGRlbGV0ZWQsIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCB0byB1cGRhdGUgc3RvcmFnZSwgXG5cblxuLy8gc28gbm93IG5leHQsIEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBcblxuLy8gdXBkYXRlIG15IHN0b3JhZ2UgYW5kIGFycmF5IGJhc2VkIG9uIHdoZW4gdXNlciBkZWxldGVzIFxuXG4vLyBhIHNpbmdsZSB0b2RvIGl0ZW0sIFxuXG4vLyBzb21ldGhpbmcgd2lsbCBuZWVkIHRvIGJlIHBhc3NlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gaG93IGNhbiBzdG9yYWdlIHJlZmxlY3QgY2hhbmdlcyBpbiB0aGUgRE9NLCBcblxuLy8gcHJvamVjdCBpcyBkZWxldGluZyBmcm9tIHRoZSBET00sIGJ1dCBpdCBzdGlsbCBzaG93cyBpbiBhcnJheSBcblxuLy8gYW5kIHN0aWxsIHNob3dzIGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhZnRlciB0aGUgcHJvamVjdCBpcyBkZWxldGVkIGZyb20gdGhlIERPTSwgXG5cbi8vIHRoZSBwcmludFZhbHVlVG9ET00gZnVuY3Rpb24gd2lsbCBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBcblxuLy8gc28gdGhhdCBjYW4gcmVmbGVjdCB0aGUgbG9jYWwgc3RvcmFnZSB0byB0aGUgRE9NLCBcblxuLy8gc28gSSB0aGluayB0aGUgcHJvamVjdCBhcnJheSBpcyBnb2luZyB0byBiZSBwYXNzZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIHRoZW4gdGhlIHByaW50dmFsdWUgdG8gZG9tIGZ1bmN0aW9uIG5lZWRzIHRvIGNhbGxlZCwgc28gc2h3byB0byB0aGUgRE9NIFxuXG4vLyB3aGF0IGlzIGluc2lkZSBsb2NhbCBzdG9yYWdlIFxuXG4vLyBjb250aW51ZSB0byBicmFpbnN0b3JtIGhvdyB0byByZWZsZWN0IHRoZSBjaGFuZ2UgaW4gZGVsZXRpbmcgXG5cbi8vIHByb2plY3RzIGZyb20gdGhlIERPTSBhbmQgaG93IHRvIHVwZGF0ZSB0aGF0IGluIGxvY2FsIHN0b3JhZ2UuIFxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBhcnJheVN0b3JhZ2VUb2RvSXRlbXMocHJvamVjdCkgeyBcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTsgXG4gICAgXG4vLyAgfVxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdG9yYWdlKCkgeyBcbi8vICAgbGV0IGdldE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuICBcbi8vICAgY29uc29sZS5sb2coZ2V0TmFtZSk7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iaiA9IHByb2plY3ROYW1lRmFjdG9yeShnZXROYW1lKTsgXG5cbi8vICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmopO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGluZGl2ZHVhbCBwcm9qZWN0IG5hbWUgb2JqZWN0cywgXG5cbi8vIEkgYW0gYWJsZSB0byBjcmVhdGUgcHJvamVjdCBuYW1lcywgYnV0IHdoZW4gSSB1c2Ugb2JqZWN0cyBpdCBvbmx5IGFkZHMgb250bywgYW5kIGRvZXMgbm90IGNyZWF0ZSB1bmlxdWUgcHJvamVjdHMuIFxuXG4vLyBcblxuXG5cblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKHZhbHVlKSB7IFxuXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWUpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkgeyBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdE5hbWUoXCJhbGVjXCIpOyBcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4vLyBsZXQgZ0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gYXJyYXk7XG4vLyAgICAgfVxuLy8gfSgpKTsgXG5cbi8vIGdBcnJheSgxKTsgXG4vLyBnQXJyYXkoMik7IFxuLy8gZ0FycmF5KDMpOyBcbi8vIGdBcnJheSg0KTsgXG5cbi8vICBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyYXkgPSBbXTsgXG4vLyAgICAgY29uc29sZS5sb2coYXJyYXkpXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxUaGlzICh2YWx1ZSkgeyBcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7IFxuLy8gICAgICAgICByZXR1cm4gYXJyYXlcbi8vICAgICB9IFxuLy8gfSBcblxuLy8gc3RvcmVVc2VyVmFsdWUoKTtcblxuXG5cblxuXG5cbi8vIGZpbmQgd2F5IHRvIGFkZCBpdGVtcyBvbnRvIGFuIGFycmF5LCBJIGRvbid0IHRoaW5rIGl0J3Mgc21hcnQgdG8gYWRkIG9uZSBhdCBhIHRpbWUsIGJ1dCBtb3JlIHNvIGxpa2UgYWRkaW5nIHByb2plY3RzIG9udG8gYSBzaW5nbGUgYXJyYXkgXG5cbiAgICAvLyB0aGluayBvZiBhIHdheSB0byBhZGQgaW50byBhbiBhcnJheSwgbG9vayBpbnRvIGNsb3N1cmUgYW5kIGFkZGluZyBvbnRvIGFuIGFycmF5IHVzaW5nIGNsb3N1cmUuIFxuXG4gICAgLy8gY2xvc3VyZSBzZWVtcyBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBob3cgY2FuIEkgbWFrZSB0aGlzIHdvcmsgd2l0aCB0aGUgY3VycmVudCBjb2RlIEkgaGF2ZT8gXG5cbiAgICAvLyB3ZWxsIEkgdGhpbmsgSSBkaWQgZmluZCBhIHdheSB0byBzdG9yZSB0aGUgcHJvamVjdCBuYW1lcywganVzdCBzb21ldGhpbmcgZG9lc24ndCBzZWVtIHJpZ2h0IGFib3V0IHRoZSBzdG9yYWdlXG5cbiAgICAvLyAgXG5cbi8vIHRoYXQgYXJyYXkgY2FuIGJlIHBhcnQgb2YgYW4gb2JqLCBrZXkgaW50byB0aGUgYXJyYXlcblxuLy8gYnRuIHByb2JsZW0sIGFwcGVuZGluZyB0b28gbWFueSBpbnB1dCBmaWVsZHMsIGNvbmRpdGlvbmFsIHRvIHByZXZlbnQgXG5cbi8vIGNvcnJlY3QgYXJyYXkgc3RvcmFnZSBcblxuLy8gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG4gXG4vLyBwcm9wZXJseSBpbnN0YWxsaW5nIGFuZCB1c2luZyBzYXNzIGFmdGVyIHRoZSBhYm92ZSBpcyBhY2NvbXBsaXNlZC4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9