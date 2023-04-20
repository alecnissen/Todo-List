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

      console.log(currentProject.todoItems);
      
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

  projectTodoContainerDisplay.style.flexDirection = "column";
  // let div = document.createElement("div"); 

  // div.style.backgroundColor = "white"; 

  // div.style.fontSize = "2rem"; 

  projectTodoContainerDisplay.replaceChildren(); 

  for (let i = 0; i < currentProject.todoItems.length; i++) { 
    let taskHolder = document.createElement("div"); 

    // console.log(currentProject); 

    // console.log(currentProject.todoItems);


    projectTodoContainerDisplay.append(taskHolder);

    let selectedProject = currentProject.todoItems[i]; 

    // console.log(projectNameFactory(selectedProject)); 
     
    taskHolder.append(selectedProject); 

    projectTodoContainerDisplay.append(taskHolder);
    
  } 
  
 } 

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




// Now down to one function, one function which will just display 

// todo's, 

// plan is to look back at old messages, 

// think of a plan on how to attack this, 

// look at the function and try to understand what is going 

// plan an attack, understand, and if you are stuck as for help. 

// display the unqiue todo's for each project, 

// I notice that if I add a new todo, all the todo's will show, 

// display the unique todo's, if project name is clicked on 

// display all the todo's for that project, 

// I really do not understand what the fucking problem is 

// where the fuck do I even start? 

// what the hell am I supposed to "figure out" from this? 

// complete bullshit, 

// I guess, just experiment in the function, I have no clue, 

// you will have to ask rayray later, I would stick with him 

// because he knows your project, 

// for now I would just try to understand what is happening, 

// use some console logs to understand what you are appending, 

// the overall problem is that 

// 1. todos cannot be displayed, until a new todo is added 

// 2. each project, displays all todo's instead of unqiue, 

// 3. 








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRXJCOzs7O0FBSTlDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdNOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87Ozs7QUFJUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJCQUEyQixxQ0FBcUM7QUFDaEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRSxvREFBbUI7O0FBRXJCOztBQUVBOzs7QUFHQSxDQUFDOzs7QUFHRDs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRSxvREFBbUI7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0IscUNBQXFDO0FBQ3ZEOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHNDQUFzQztBQUM5RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLElBQUk7Ozs7QUFJSjs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7O0FBRWhEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixlQUFlLGNBQWM7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUEsTUFBTTs7O0FBR047Ozs7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsdUNBOztBQUVBOztBQUVvQjs7QUFFRDs7QUFFaUY7O0FBRXBHOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyREFBZ0IsQ0FBQyxtREFBWTs7Ozs7QUFLN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQVNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1NEJvQjs7QUFFc0I7O0FBRTFDOzs7QUFHZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNsS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbmxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG5sZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbmxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG5sZXQgY3VycmVudFByb2plY3QgXG5cbmZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cbnByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSkgXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pIFxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4gICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUNvbnRhaW5lci5pZCk7XG5cbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG5cbiAgICAgIFxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIHRoZSBjYW5jZWwgYnV0dG9uXCIpO1xuXG4gICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgfSlcblxuXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gXCIuLi9wbHVzLXNpZ24tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICAgLy8gb2xkIGxvY2F0aW9uIG9mIGRpc3BsYXkgdG9kbyBmdW5jdGlvbiBcbiAgICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gICAgICAvLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgICAgICAgXG4gICAgICAvLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAvLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIC8vICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgICAvLyAgIC8vIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4gICAgICAvLyAgIC8vIGRpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiOyBcblxuICAgICAgLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgLy8gICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAgIC8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuXG4gICAgICAvLyAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4gICAgICAgICAgIFxuICAgICAgLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHNlbGVjdGVkUHJvamVjdCk7XG5cbiAgICAgIC8vICAgICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICAgICAgICBcbiAgICAgIC8vICAgfSBcbiAgICAgICAgXG4gICAgICAvLyAgfSBcblxuICAgICAgLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuICAgIH0pXG4gIH1cbn0gXG5cbiBcblxuZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSkgIFxuXG5sZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG5jYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59KSBcblxuXG5sZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbn0pIFxuXG5cbmxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG5jaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4gIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbiAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbiAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4gIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG5cblxufSkgIFxuXG5cbmxldCBhZGRCdG5Ub0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWxcIik7IFxuXG5cblxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItY3JlYXRpbmctdG9kby10YXNrXCIpO1xuXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxuXG5cbmFkZEJ0blRvRG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIFxuICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG5cbiAgbGV0IHRpdGxlSW5wdXRGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWlucHV0LWZvcm1cIik7IFxuXG4gIGxldCB0aXRsZUlucHV0VmFsdWUgPSB0aXRsZUlucHV0Rm9yVG9kby52YWx1ZTsgXG5cbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godGl0bGVJbnB1dFZhbHVlKTsgXG5cbiAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG9cIik7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSA9IGRlc2NyaXB0aW9uRm9yVG9kby52YWx1ZTsgXG4gIFxuICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSk7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IGR1ZURhdGVGb3JUb2RvVmFsdWUgPSBkdWVEYXRlRm9yVG9kby52YWx1ZTsgXG5cbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kb1ZhbHVlID0gcHJpb3JpdHlGb3JUb2RvLnZhbHVlOyAgXG5cbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2gocHJpb3JpdHlGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBjdXJyZW50UHJvamVjdHNUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtczsgXG5cbiAgbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuXG5sZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpXG5cbi8vIHByaW50VG9Eb1ZhbHVlcyh0b2Rvc0ZvclByb2plY3QpO1xuXG4vLyBwdXNoVG9kb09iamVjdCh0b2Rvc0ZvclByb2plY3QpO1xuXG50b2RvT2JqZWN0RmFjdG9yeSh0b2Rvc0ZvclByb2plY3QpOyBcblxuZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxufSkgICBcblxuZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbiAgcmV0dXJuIHsgXG4gICAgdGl0bGU6IHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSBcbiAgfVxufSAgXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gIC8vIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4gIC8vIGRpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiOyBcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7IFxuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuXG4gICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcblxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVGYWN0b3J5KHNlbGVjdGVkUHJvamVjdCkpOyBcbiAgICAgXG4gICAgdGFza0hvbGRlci5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0KTsgXG5cbiAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuICB9IFxuICBcbiB9IFxuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50VG9Eb1ZhbHVlcyhwcm9qZWN0KSB7IFxuICBcbi8vICAgbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgbGV0IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QgPSBwcm9qZWN0OyBcblxuLy8gICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHsgXG4vLyAgIC8vICAgbGV0IHggPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0W2ldOyBcblxuLy8gICAvLyAgIGNvbnNvbGUubG9nKHgpOyBcbi8vICAgLy8gfVxuXG4vLyAgIGxldCBkaXNwbGF5VGl0bGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnRpdGxlOyBcblxuLy8gICBsZXQgZGlzcGxheURlc2NyaXB0aW9uID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjsgXG5cbi8vICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QucHJpb3JpdHk7IFxuXG4vLyAgIGxldCBkaXNwbGF5RHVlRGF0ZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZHVlRGF0ZTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlUaXRsZSk7XG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheURlc2NyaXB0aW9uKTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEdWVEYXRlKTtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVByaW9yaXR5KTsgXG5cblxuLy8gfSBcblxuXG5cblxuXG5cblxuLy8gb2sgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWVzLCBJIGFtIGFibGUgdG8gcHJpbnQgdGhlIHZhbHVlcyB0byB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCB0aGVzZSB0b2RvIGl0ZW1zIG9udG8gZWFjaCBwcm9qZWN0IFxuXG4vLyBhbmQgc2F2ZSB0aGVtIGVhY2ggdGltZSBzbyB0aGV5IHJlbG9hZCBvbiByZWZyZXNoPyBcblxuLy8gSSBjYW4gZ3JhYiB0aGUgY3VycmVudCBwcm9qZWN0LCB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIGJldHdlZW4gcHJvamVjdHMgXG5cbi8vIHRoZW4gaG93IGNhbiBJIGFkZCB0aGVzZSBuZXdseSBhZGRlZCB0b2RvJ3MgYmFjayBpbnRvIHRoZSBhcnJheSwgXG5cbi8vIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyAgXG5cbi8vIEkgYWJsZSB0byBhZGQgdG9kbyBpdGVtcyBpbnRvIGEgcHJvamVjdCwgYnV0IGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgIHRoZW0/IFxuXG4vLyBkbyBJIG5lZWQgdG8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/IFxuXG4vLyBcblxuXG5cblxuLy8gZ2V0IGFsbCB0aGUgdmFsdWVzLCB3aXRoaW4gdGhlIG1vZGFsLCBcblxuLy8gZmlyc3QgZ2V0IHRoZSB2YWx1ZXMgb2YgYWxsIHRoZSBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvbmNlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgdmFsdWVzIGFyZSBzYXZlZCwgXG5cbi8vIHBhc3NlZCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdHMgdG9kbyBhcnJheSwgXG5cbi8vIGFsc28gcGFzc2VkIHRvIHN0b3JhZ2UgdG9vIHNvIHRoZSB0b2RvIGFycmF5IGlzIHRoZSBzYW1lIGFzIHJlZ3VsYXIgcHJvamVjdCBhcnJheSBcblxuLy8gc28gd2UgaGF2ZSB0byBhYmlsaXR5IHRvIGdldCB0aGUgdmFsdWVzLCBcblxuLy8gYW5kIHB1c2ggdGhlbSB0byB0aGUgY29ycmVjdCBwcm9qZWN0LCBcblxuLy8gdGhleSBkbyBub3Qgc2F2ZSwgYW5kIGNsZWFyIHVwb24gcmVmcmVzaC4gXG5cbi8vIGhvdyBjYW4gSSBwdXNoIHRoZXNlIHZhbHVlcyBpbnRvIHRoZSBhcnJheSwgcGVybWFuZW50bHkgc2F2ZSB0aGVtLCBcblxuLy8gYW5kIHRoZW4gZGlzcGxheSB0aGVtPyBIb3cgY2FuIEkgZGlzcGxheSB0aGUgdG9kbydzPyBcblxuLy8gRG8gSSBoYXZlIHRvIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9qZWN0cyBhcnJheT8gXG5cbi8vIGRvIEkgaGF2ZSB0byBwYXNzIHByb2plY3QgYXJyYXkgYWdhaW4/IFxuXG4vLyB5b3Ugd2lsbCBoYXZlIHRvIGRpc3BsYXkgdGhlIHByb2plY3RzIGFnYWluIFxuXG4vLyB0aGUgdG9kbydzIGFyZSBiZWluZyB1cGRhdGVkIFxuXG4vLyBwdXNoIHRoZSB1cGRhdGVkIHByb2plY3RzQXJyYXksIGFuZCBmaW5kIGEgd2F5IHRvIGRpc3BsYXkgdG9kbydzLFxuXG4vLyBcblxuXG5cblxuLy8gY29uc3QgQXBwID0gICgoKSA9PiB7XG4vLyAgIC8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXVxuLy8gICBsZXQgY3VycmVudFByb2plY3RcblxuLy8gICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0ID0gY3VycmVudFByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3QuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdC5pZClcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3R9XG4vLyB9KSgpXG5cblxuXG4vLyBIZWxsbywgSSBhbSBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG9kbywgSSdtIHRyeWluZyB0byBpbXBsZW1lbnQgc29tZSBsb2dpYyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgcHJvamVjdCBidG4sIGl0IHdpbGwgY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIGFuZCBpbiB0aGUgXCJ5b3VyIHByb2plY3RzXCIgc2VjdGlvbi4gQmFzaWNhbGx5IGp1c3QgdXNpbmcgYSBsaXN0ZW5lciwgdGhhdCB3aGVuIHRoZSB1c2VyIGNvbmZpcm1zIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIGRpc3BsYXksIHRoZW4gcmVtb3ZlIHRoZSB2YWx1ZS4gVGhlIHByb2JsZW0gaXMgSSBnZXQgdW5kZWZpbmVkIHdoZW4gSSB0cnkgdGhpcyBhcHByb2FjaCwgd2hpY2ggaXMgc3RyYW5nZSBiZWNhdXNlIEknbSBnZXR0aW5nIHRoZSBlbGVtZW50LCB0aGVyZSBpcyBhIHZhbHVlIGluc2lkZSB0aGVyZSwgdGhlbiBqdXN0IHVzaW5nciAudmFsdWUuIFxuXG5cblxuLy8gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB3aXRoIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgYnRuIGFuZCB0aGV5IGNvbmZpcm0gXG5cbi8vIHRoZXkgd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgd2FudCB0byBkZWxldGUgaXQgZnJvbSBtYWluIGNvbnRhaW5lciBhcyB3ZWxsIGFzIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBOb3Qgc3VyZSBJZiBJJ20gZG9pbmcgdGhpcyByaWdodCBidXQgSSBjYW4gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIGFuZCB0aGVuIHVzZSByZXBsYWNlQ2hpbGRyZW4gdG8gY2xlYXIgdGhlIERPTSBdXG5cbi8vIGJ1dCBJIGFtIGdldHRpbmcgcHJldHR5IHN0dWNrIG9uIGhvdyB0byBkZWxldGUgaXQgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uPyBcblxuLy8gQmFzaWNhbGx5IEkgdGhpbmsgb2Ygc29tZWhvdyBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIHRoZSBtYWluIGNvbnRhaW5lciwgYXMgd2VsbCBhcyB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gdXNpbmcgcmVtb3ZlQ2hpbGQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgaW4gYm90aCBwbGFjZXMsIFxuXG5cblxuICBcbi8vIE9LIHdlbGwgdGhpcyBpcyBvbmUgd2F5IHRvIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhY2Nlc3MgdGhhdCBzYW1lIHByb2plY3QgbmFtZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gYW5kIGRlbGV0ZSB0aGF0PyBcblxuLy8gSSBuZWVkIHRvIGFsc28gZGVsZXRlIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgd2l0aGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24uIGxvb2sgdXAgcmVwbGFjZUNoaWxkcmVuXG5cbi8vIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Ugd2hhdCBhcmUgeW91IHJlcGxhY2luZyB3aXRoPyBIb3cgZG8geW91IGtub3cgd2hpY2ggZWxlbWVudCB0byByZXBsYWNlIGl0IHdpdGg/IFxuXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkFycmF5ID0gQXJyYXkuZnJvbShjYW5jZWxCdG5BZGRUb2RvTW9kYWwpO1xuXG5cblxuLy8gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIFxuXG4vLyBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMpO1xuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KGFycmF5KSB7IFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICBsZXQgcHJvamVjdE5hbWVJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG4gICAgXG4vLyAgIH1cbi8vIH1cblxuLy8gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChwcm9qZWN0QXJyYXkpO1xuXG5cblxuLy8gSSB0aGluayBJIE5lZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBkb24ndCB3YW50IHRvIGhhdmUgdG9vIG11Y2ggZ29pbmcgb24gaW4gb25lIGZ1bmN0aW9uLCBcblxuLy8gdXNlIHRoZSBzYW1lIGxvZ2ljLCBsb29wIHRocm91Z2ggcHJvamVjdCBhcnJheSwgXG4gXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXgucHJvamVjdCk7XG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG9rIG5leHQsIHByb2plY3QgbmFtZXMgYXJlIGJlaW5nIGFkZGVkIGR5bmFtaWNhbGx5LCB0aGV5IGFyZSBwcm9wZXJseSBiZWluZyBhZGRlZCB0byB0aGUgYXJyYXkgYW5kIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBuZXh0IHdoZW4gSSBjbGljayBvbiB0aGUgcHJvamVjdCwgdGhhdCBwcm9qZWN0J3MgbmFtZSBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGNsZWFyIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgZGlzcGxheSB0aGUgbmV3IHByb2plY3QsIFxuXG4vLyByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGlzIGFkZGVkIGF0IGEgdGltZSwgc2hvdWxkIG5vdCBhZGQgb250by4gc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBhbG9uZyB3aXRoIHRoZSB0d28gYnRucywgYWRkIGFuZCBkZWxldGUgZm9yIHRoZSB0b2RvJ3MgXG5cbi8vIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBzaG93IHRoYXQgcHJvamVjdCwgdXNlciBjYW5ub3QgYXBwZW5kIHRoYXQgcHJvamVjdCBtdWx0aXBsZSB0aW1lcyBieSBjbGlja2luZywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIHRoaXMgd2lsbCBiZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBmaXJzdCBJIGZlZWwgbGlrZSB5b3Ugd2lsbCBuZWVkIHRvIGxvb3AgdGhyb3VnaCBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0IGZyb20gdGhlIGFycmF5LCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBsb2dpYyB3aWxsIGdyYWIgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gYW5kIGFwcGVuZCB2YWx1ZXMgdG8gaXQsIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb2plY3QgaXMgYWxyZWFkeSBhZGRlZCBzdWNoIGFzIElEJ3MgbWF0Y2hpbmcsIFxuXG4vLyBpZiBJRCBtYXRjaGVzIHdoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgZnJvbSBhZGRpbmcgYWdhaW4sIGVsc2UgaWYgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBjb250YWluZXIsIFxuXG4vLyBiZWZvcmUgdGhlIHByb2plY3QgbmFtZSBpcyBhcHBlbmRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGF0IG5hbWVzIGlkIG1hdGNoZXMgdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyBJIHdvdWxkIHNheSBmaXJzdCBsZXQncyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBjYW4gZ3JhYiBhbGwgdGhlIHByb2plY3QgbmFtZXMgYW5kIElEPyBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIFxuXG4vLyBJJ20gbm90IHN1cmUgeW91IG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIHNlZW1zIGxpa2UgeW91ciBnZXR0aW5nIHByb2plY3QgdGFyZ2V0IHZhbHVlLCB3aXRoIGUudGFyZ2V0LnRleHRDb250ZW50IFxuXG4vLyBub3cgSSBiZWxpZXZlIHdoYXQgeW91IG5lZWQgdG8gZmlndXJlIG91dCBpcyBob3cgdG8gZGlzcGxheSB0aGUgY2VydGFpbiBwcm9qZWN0LCBiYXNlZCBvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gcmVtZW1iZXIgcmVwbGFjZSB0aGUgY29udGVudCB3aXRoaW4gbWFpbiBjb250YWluZXIsIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgYWxsIGJhc2VkIG9uIGJ0biBjbGljayBcblxuLy8gdGhpbmsgYmFjayB0byByZXN0YXVyYW50IHBhZ2UsIFxuXG4vLyBJIHNvbWVob3cgbmVlZCB0byB0aGluayB0aGlzIG91dCwgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIGNvbnRlbnRzIG9mIHByZXZpb3VzIHByb2plY3QgYW5kIG1ha2Ugd2F5IGZvciBuZXcsIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwsIGlmIHRoaXMgcHJvamVjdCBpcyBjbGlja2VkLCBjaGFuZ2UgdG8gYSB2YXJpYWJsZSB0aGVuIHVzZSByZXBsYWNlIGNoaWxkLiBcblxuLy8gaWYgdGhlIHZhcmlhYmxlIHRhcmdldFZhbHVlUHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIG9yIHRoZSBkaXYsIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgIFxuXG4vLyBcblxuLy8gLS0gaG93IHRvIG1ha2Ugc3VyZSBvbmx5IHRoYXQgd2hlbiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGl0IHdpbGwgcG9wdWxhdGUsIHdpdGggdGhhdCBwcm9qZWN0IG5hbWUsIHdpcGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIFxuXG4vLyAtLSB3aHkgaXMgdGhlIHByb2plY3QncyBzZWN0aW9uIG5vdCBkeW5hbWljYWxseSBhZGRpbmcgcHJvamVjdHM/IEkgaGF2ZSB0byByZWZyZXNoIHRoZSBwYWdlIGZvciBpdCB0byBzaG93IHVwPyBcblxuLy8gaGFuZGxlIHRoZSBjb25kaXRpb25hbCBsb2dpYyBmaXJzdCwgYW5kIGNvcnJlY3RseSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWVzIGluIHRoZSBtYWluIGNvbnRhaW5lciBmaXJzdCwgXG5cbi8vIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBpcyBuZWVkZWQgdG8gY29tcGxldGUgdGhpcywgcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBjYW4gYmUgZGlzcGxheWVkIGF0IGEgdGltZSwgXG5cbi8vIGlmIHByb2plY3QgY29udGFpbmVyIGluY2x1ZGVzIHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gc2hvdWxkIGl0IGJlIHNpbWlsYXIgdG8gcmVzdGF1cmFudCBwYWdlLCBlYWNoIHByb2plY3QgaXMgZ2l2ZW4gYSB2YXJpYWJsZSwgdGhlbiBpZiB0aGF0IHByb2plY3QgaXMgY2xpY2tlZCBvbiBpdCdzIGdpdmVuIGEgdmFyaWFibGUgb3IgaW5kZXgsIFxuXG4vLyB0aGVuIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0J3MgSUQsIG1hdGNoZXMgd2hhdCBpcyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyLCBpZiBub3QgY2xpY2tlZCwgcmVwbGFjZSB3aXRoIG5ldyBjbGljaywgXG5cbi8vIGlmIGl0IGlzIGNsaWNrZWQgYWdhaW4sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZXBsYWNpbmcgdGhlIGNvbnRlbnQsIFxuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IHdpdGggdGhlIHByb2plY3RzIHVucWl1ZSBJRCwgaWYgcHJvamVjdC5pZCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGF0IGJ0biBhZ2FpbiwganVzdCByZXR1cm4sIFxuXG4vLyBjYW4gd2UgZ28gYmFjayBhbmQgbG9vayBhdCB3aGF0IHlvdSBkaWQgcHJldmlvdXNseSB3aXRoIHlvdXIgY29kZT9cblxuLy8gSSBkb24ndCB0aGluayBpdCdzIHRoZSBzYW1lIHByZXZpb3VzbHksIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgZGl2IGhlcmUgaW5zdGVhZCBvZiBhIGJ1dHRvbiwgXG5cbi8vIEkgd2FudCB0byBmaW5kIGEgd2F5IHRoYXQgSSBjYW4gb25seSBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHNob3VsZCBhZGQgZHVwbGljYXRlcywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCByZXBsYWNlIGNvbnRlbnRzIG9mIG9sZCBhbmQgd2lwZSB0aGUgbmV3LCBcblxuLy8gSSB0aGluayB0aGUgRE9NIERpc3BsYXkgaXMgZmluZSwgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uLCBjcmVhdGluZyBhIGRpdiB0aGF0IHN0b3JlcyB0aGUgcHJvamVjdHMgbmFtZSwgXG5cbi8vIG5vdyBvbmNlIHRoZSBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGxvb3AgdGhyb3VnaCBzdG9yYWdlLCBmaW5kIG91dCB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uIGFuZCBkaXNwbGF5J3MgaXQncyBjb250ZW50cywgXG5cbi8vIHN0aWNrIHdpdGggaG93IHlvdSBhcmUgZGlzcGxheWluZyB0aGUgcHJvamVjdHMgaW4gdGhlIERPTSwgXG5cbi8vIGhvdyB3aWxsIHlvdSBhZGQgdGhpbmdzIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBkaXNwbGF5IG9ubHkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIG1ha2UgYSBsb29wIGdldCB0aGUgcHJvamVjdCdzIElELCBjb21wYXJlIHRoZSBJRCB0byB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCBvbiwgXG5cblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWUpIHsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZSA9IHZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlSUQgPSBwcm9qZWN0VmFsdWUuaWQ7IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHByb2plY3RWYWx1ZVtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG5cbi8vIGhlcmUgdG8gdG9wIG9mIGZ1bmN0aW9uLCBcblxuXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0OyBcbiAgLy8gICAgIGxldCBuYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIGxldCB5ID0gbG9jYWxTdG9yYWdlLmtleShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyh5KTtcbiAgLy8gICB9XG4gIC8vIH0gXG4gIC8vICAgZm9yKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIC8vIGxldCB4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0W1wia2V5XCJdOyBcblxuICAvLyAgICAgLy8gbGV0IHhpZCA9IHByb2plY3RbXCJpZFwiXTsgXG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHhpZCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyh4KTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cblxuICAvLyBvbGQgbG9naWMgYmVsb3cgXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGxldCB0YXJnZXRWYWx1ZVByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZUlEKTtcblxuICAvLyAgIC8vIGlmIChwcm9qZWN0VmFsdWVJRCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSkgeyBcbiAgLy8gICAvLyAgICAgICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIik7XG4gIFxuICAvLyAgIC8vICAgIH1cblxuXG5cbiAgLy8gICBsZXQgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW5cIik7XG4gICAgXG4gIC8vICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAvLyAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYpO1xuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmFwcGVuZCh0YXJnZXRWYWx1ZVByb2plY3ROYW1lKTtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbik7IFxuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICAvLyB9KVxuXG4gIC8vIGhlcmUgdG8gYm90dG9tIGJyYWNrZXQgXG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdk5hbWVCdG5OYXZiYXIpO1xuXG4vLyB9XG5cblxuLy8gZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuLy8gICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gdmFsdWVJblByb2plY3RbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgcHJvamVjdERpdi5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG5cbi8vICAgY29uc29sZS5sb2coc3RyaW5nVmFsdWUpO1xuXG5cblxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gbGV0IHByb2plY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlRGF0YSk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdFZhbHVlcyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG4vLyAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9ICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gXG5cblxuXG5cblxuXG5cblxuXG4vLyBtYWtlIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYXBwZW5kcyB0aGUgcmVzdWx0IHRvIHRoZSBET00uIFxuXG4vLyBmdW5jdGlvbiBwcmludFN0b3JhZ2VUb0RvbSgpIHsgXG4vLyAgIC8vIGxldCBnZXRTdG9yYWdlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuLy8gICAvLyBsZXQgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2VJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcblxuIFxuXG4vLyAgIGxldCBuYXZQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcbi8vICAgbmF2UHJvamVjdHNDb250YWluZXIuYXBwZW5kKHN0dXBpZFZhbHVlKTtcbi8vIH0gXG5cblxuLy8gcHJpbnRTdG9yYWdlVG9Eb20oKTtcblxuXG5cblxuXG4gIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuICAvLyBsZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbiAgLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKGZvcm1FbGVtZW50KTtcblxuLy8gZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cbi8vIFllYWgsIEkgdGhpbmsgZm9jdXNpbmcgb24gdGhlIGJhc2ljIGlkZWEgb2YgaG93IHRvIGNyZWF0ZSBhIHByb2plY3QgYW5kIFxuLy8gdG8gZGlzcGxheSB0aGUgY29ycmVjdCBwcm9qZWN0IHdoZW4gaXRzIHNpZGViYXIgYnV0dG9uIGlzIGNsaWNrZWQgd291bGQgYmUgbXkgZmlyc3Qgc3RlcC4gXG4vLyBUaGVuIHlvdSBjYW4gdGhpbmsgYWJvdXQgd2hhdCBzaG91bGQgYmUgb24gdGhlIHByb2plY3QncyBwYWdlOiB0aGV5IHdpbGwgbmVlZCBidXR0b25zIHRvIGFkZCBhIHRhc2sgYW5kIHdoYXQgbm90XG5cbi8vIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBwcm9qZWN0IG5hbWUsIGFuZCBzYXZlIHRoZSB2YWx1ZSwgcGFzcyB0aGF0IHZhbHVlIHRvIHN0b3JhZ2UuIFxuXG4vLyB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgc2F2ZWQsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkIGJ0biwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgZ2V0IHRoZSBpbnB1dCBmaWVsZCwgY2FwdHVyZSBpdCdzIHZhbHVlIHRoZW4gY29uc29sZSBsb2cgaXQgXG5cbi8vIHRoZSBpc3N1ZSBvZiB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgYmVpbmcgY2xlYXJlZCwgXG5cbi8vIHdlbGwgSSB3cmFwcGVkIGl0IGluc2lkZSBhIGZvcm0gdGFnLCBpdCB3b3JrcyBidXQgaXQgcmVmcmVzaGVzIHRoZSBwYWdlLCBJIG1lYW4gaXMgdGhhdCBhIHByb2JsZW0sIFxuXG4vLyBJIGd1ZXNzIG5vdyBJJ2xsIHdvcmsgb24gc3RvcmluZyB0aGUgZGF0YSwgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIERPTSBsb2dpY1xuLy8gZXhwb3J0IHRoZW4gaW1wb3J0IHdpdGhpbiBhbm90aGVyIGZpbGUgXG5cbi8vIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250ZW50VHlwZSB9IGZyb20gXCJtaW1lLXR5cGVzXCI7XG4vLyBpbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjsgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUlucHV0KCkgeyBcblxuLy8gICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIjtcblxuLy8gICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbi8vICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4vLyAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcblxuLy8gICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbi8vICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuLy8gfSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgdXNlcklucHV0VmFsdWUgPSB2YWx1ZTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbi8vICAgLy8gZ2V0IHRoZSBlbGVtZW50IGFuZCB0cnkgdG8gdXNlIGl0IGluc2lkZSBldmVudCBsaXN0ZW5lciBtb2R1bGUsIFxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpOyBcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgXG5cbi8vIC8vIGlmIChwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmluY2x1ZGVzKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKSkgeyBcbi8vIC8vICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuLy8gLy8gfVxuXG4vLyAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBjbGlja2VkIHRoZSBwcm9qZWN0IG5hbWVcIik7XG5cbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgICBcbi8vICAgICAvLyB3aGVuIGJ0biBpcyBjbGlja2VkIGl0IHdpbGwgZ2VuZXJhdGUgYSBwb3AtdXAgZm9ybSBcbi8vICAgICAvLyBJIHRoaW5rIHlvdSBuZWVkIGEgY29udGFpbmVyLCBhIGRpdiB0aGF0IGhvbGRzIHRoZSBjb250ZW50LCBhcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyLCBcbiAgICBcbi8vICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyAgXG4gICAgICBcbi8vICAgICAgIC8vIGlmIChtYWluQ29udGVudFByb2plY3RDb250YWluZXIuaW5jbHVkZXMoc29tZUJ0bikpIHtcbi8vICAgICAgIC8vICAgc29tZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4vLyAgICAgICAvLyB9XG5cbiAgICBcblxuLy8gICAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgICAgLy8gc29tZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wLXVwLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGxldCB0aXRsZU9mVG9Eb0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCIgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCIgdW5kZXJsaW5lXCI7XG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICAgIC8vIGluIG9yZGVyIHRvIGNlbnRlciBpdCB5b3UgbmVlZCB0byBhcHBlbmQgdGhpcyBlbGVtZW50IFxuXG4vLyAgICAgICAvLyB0byBhbm90aGVyIGNvbnRhaW5lciBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTsgXG5cbi8vICAgfSkgXG5cblxuLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cblxuXG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9NYWluKCkgeyBcbi8vICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7IFxuXG4vLyB9XG5cblxuXG4vLyBJJ20gYWJsZSB0byBnZXQgdGhlIHVzZXIgdmFsdWUsIEkgYW0gYWJsZSB0byBsb2cgb3V0IGl0J3MgdmFsdWUsIEkgYW0gYWJsZSB0byBncmFiIHRoZSBwcm9qZWN0cyBjb250YWluZXIgc2VjdGlvbixcblxuLy8gaXQgc3RpbGwgcmV0dXJucyBhbmQgSFRNTCBlbGVtZW50LCBJIGNhbiB0dXJuIGl0IGludG8gYW4gYXJyYXksIGJ1dCBJIGFtIHVuc3VyZSBvZiBob3cgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG5cbi8vIHdoYXQgSSB3YW50LCB0aGUgdXNlciB3aWxsIGVudGVyIHByb2plY3QgbmFtZSwgSSB3YW50IHRoYXQgbmFtZSB0byBhcHBlYXIgaW4gdGhlIHByb2plY3QncyBzZWN0aW9uIGFuZCBtYWluIGNvbnRlbnQgc2VjdGlvbihibHVlIHBhcnQpOyBcblxuLy8gUHJvYmxlbTogSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwZW5kIHRoaXMgcHJvamVjdCBuYW1lIHRvIHRoZSBET00uIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IE9uY2UgdGhlIGFkZCBidG4gaXMgcHJlc3NlZCwgdGhlIHZhbHVlL25hbWUgb2YgcHJvamVjdCB3aWxsIGJlIHNhdmVkLCBhbmQgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhhdCBcblxuLy8gdmFsdWUgYW5kIHByaW50cyB0byB0aGUgRE9NLiBcblxuLy8gSSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBjb250YWluZXIsIGFuZCB0aGUgbWFpbiBzZWN0aW9uIGJ1dCBpdCdzIGFuIEhUTUwgY29sbGVjdGlvbiwgSSBjYW4gY29udmVydCBpdCBpbnRvIGFuIGFycmF5LCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhcHBlbmQgYW4gYXJyYXkgdG8gdGhlIERPTT8gIiwiLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciBtb2R1bGVcblxuLy8gaW1wb3J0IFwic3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanNcIjtcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5sZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbmxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTsgXG5cbn0gIFxuXG59IFxuXG5wcm9qZWN0TmFtZUxvb3AoKTtcbiAgXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7ICBcblxuXG5cblxuLy8gTm93IGRvd24gdG8gb25lIGZ1bmN0aW9uLCBvbmUgZnVuY3Rpb24gd2hpY2ggd2lsbCBqdXN0IGRpc3BsYXkgXG5cbi8vIHRvZG8ncywgXG5cbi8vIHBsYW4gaXMgdG8gbG9vayBiYWNrIGF0IG9sZCBtZXNzYWdlcywgXG5cbi8vIHRoaW5rIG9mIGEgcGxhbiBvbiBob3cgdG8gYXR0YWNrIHRoaXMsIFxuXG4vLyBsb29rIGF0IHRoZSBmdW5jdGlvbiBhbmQgdHJ5IHRvIHVuZGVyc3RhbmQgd2hhdCBpcyBnb2luZyBcblxuLy8gcGxhbiBhbiBhdHRhY2ssIHVuZGVyc3RhbmQsIGFuZCBpZiB5b3UgYXJlIHN0dWNrIGFzIGZvciBoZWxwLiBcblxuLy8gZGlzcGxheSB0aGUgdW5xaXVlIHRvZG8ncyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gSSBub3RpY2UgdGhhdCBpZiBJIGFkZCBhIG5ldyB0b2RvLCBhbGwgdGhlIHRvZG8ncyB3aWxsIHNob3csIFxuXG4vLyBkaXNwbGF5IHRoZSB1bmlxdWUgdG9kbydzLCBpZiBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCBvbiBcblxuLy8gZGlzcGxheSBhbGwgdGhlIHRvZG8ncyBmb3IgdGhhdCBwcm9qZWN0LCBcblxuLy8gSSByZWFsbHkgZG8gbm90IHVuZGVyc3RhbmQgd2hhdCB0aGUgZnVja2luZyBwcm9ibGVtIGlzIFxuXG4vLyB3aGVyZSB0aGUgZnVjayBkbyBJIGV2ZW4gc3RhcnQ/IFxuXG4vLyB3aGF0IHRoZSBoZWxsIGFtIEkgc3VwcG9zZWQgdG8gXCJmaWd1cmUgb3V0XCIgZnJvbSB0aGlzPyBcblxuLy8gY29tcGxldGUgYnVsbHNoaXQsIFxuXG4vLyBJIGd1ZXNzLCBqdXN0IGV4cGVyaW1lbnQgaW4gdGhlIGZ1bmN0aW9uLCBJIGhhdmUgbm8gY2x1ZSwgXG5cbi8vIHlvdSB3aWxsIGhhdmUgdG8gYXNrIHJheXJheSBsYXRlciwgSSB3b3VsZCBzdGljayB3aXRoIGhpbSBcblxuLy8gYmVjYXVzZSBoZSBrbm93cyB5b3VyIHByb2plY3QsIFxuXG4vLyBmb3Igbm93IEkgd291bGQganVzdCB0cnkgdG8gdW5kZXJzdGFuZCB3aGF0IGlzIGhhcHBlbmluZywgXG5cbi8vIHVzZSBzb21lIGNvbnNvbGUgbG9ncyB0byB1bmRlcnN0YW5kIHdoYXQgeW91IGFyZSBhcHBlbmRpbmcsIFxuXG4vLyB0aGUgb3ZlcmFsbCBwcm9ibGVtIGlzIHRoYXQgXG5cbi8vIDEuIHRvZG9zIGNhbm5vdCBiZSBkaXNwbGF5ZWQsIHVudGlsIGEgbmV3IHRvZG8gaXMgYWRkZWQgXG5cbi8vIDIuIGVhY2ggcHJvamVjdCwgZGlzcGxheXMgYWxsIHRvZG8ncyBpbnN0ZWFkIG9mIHVucWl1ZSwgXG5cbi8vIDMuIFxuXG5cblxuXG5cblxuXG5cbi8vIG9rIHdlIGhhdmUgc29tZXRoaW5nIHdvcmtpbmcgaGVyZSwgXG5cbi8vIHlvdSBoYXZlIHR3byBmdW5jdGlvbnMsIFxuXG4vLyBhdCBsZWFzdCBkYXRhIGlzIGJlaW5nIHByaW50ZWQgdG8gdGhlIERPTSwgYW5kIGlzIHN0b3JpbmcgaW4gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG5cbi8vIGNoZWNrIHlvdXIgZnVuY3Rpb25zIGFnYWluLCBcblxuLy8gcmVtZW1iZXIgb25lIHRvIGNyZWF0ZSB0aGUgZWxlbWVudHMvc3R5bGUsIG90aGVyIHRvIGp1c3QgZGlzcGxheSB0aGUgY3VycmVudFByb2plY3RzIHRvZG8ncyBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhcHBlbmQgdmFsdWVzLCBzdHlsZSwgXG5cbi8vIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQganVzdCBkaXNwbGF5IHRoZW0uIFxuXG5cblxuLy8gbGV0IGdldFRvZG9JdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0l0ZW1zXCIpOyBcblxuLy8gbGV0IHBhcnNlVG9kb0l0ZW1zID0gSlNPTi5wYXJzZShnZXRUb2RvSXRlbXMpOyBcblxuXG5cblxuLy8gZm9yIChsZXQgdG9kbyBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgbGV0IHRvZG9JdGVtID0gcGFyc2VUb2RvSXRlbXM7IFxuXG4vLyAgICAgIGxldCB2YWx1ZUluVG9kbyA9IHBhcnNlVG9kb0l0ZW1zW3RvZG9JdGVtXTsgXG5cbi8vICAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblRvZG8pOyBcblxuLy8gICAgICAvLyBjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG4vLyB9XG5cbi8vIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTtcblxuXG5cblxuXG5cbi8vIHN0b3JlIHRoZSB0b2RvcyBsaWtlIEkgZGlkIHdpdGggbmFtZXMsIFxuXG4vLyBsb29wIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRha2UgaW4gcHJvamVjdCwgYWRkIHRoZSB2YWx1ZXMsIFxuXG4vLyBwdXNoIHRoZSBwcm9qZWN0IGJhY2sgaW50byBwcm9qZWN0cyBhcnJheSwgYW5kIHRoZW4gXG5cbi8vIHBhc3MgdGhlIHByb2plY3RzQXJyYXkgYmFjayB0byBET00gZnVuY3Rpb24sIGFuZCBzdG9yYWdlLCBcblxuLy8gYWRkIHRoZSB0b2RvJ3Mgb24gYSBwcm9qZWN0LCB1cGRhdGUgaXQgYWdhaW4gXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBhcnNlVG9kb0l0ZW1zKTtcblxuXG4vLyBob3cgY2FuIEkga2VlcCBteSB0b2RvJ3MgYWZ0ZXIgcGFnZSByZWZyZXNoPyBZZXN0ZXJkYXkgaXQgc2VlbWVkIGxpa2UgaXQgd2FzIGEgcHJvYmxlbSBpbiBob3cgSSdtIHN0b3JpbmcgdGhlbSBhbmQgaG93IEkgcGFyc2UgdGhlbSBcblxuLy8gaXQgc2VlbXMgbGlrZSBpdCBpcyBhIHN0b3JhZ2UgcHJvYmxlbSwgaG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSB0b2RvIGFycmF5IHdpdGhpbiBlYWNoIHByb2plY3QsIFxuXG4vLyB0cnkgdG8gcGFyc2UgdGhlIGRhdGEgbGlrZSB1IGRpZCBiZWZvcmU/IFxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuLy8gZnVuY3Rpb24gcGFyc2VUb2RvKCkgeyBcbi8vICAgICAgZm9yIChsZXQgaXRlbSBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgICAgICBsZXQgdG9kbyA9IGl0ZW07IFxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gICAgICB9XG4vLyB9IFxuXG4vLyBwYXJzZURhdGEoKTtcblxuXG4vLyBPSyBzbyB0aGUgZGVsZXRpbmcgcHJvamVjdCBtZXRob2Qgd29ya3MhISBJIGFtIG5vdyBhYmxlIHRvIGRlbGV0ZSBhIHByb2plY3QgZnJvbSBtYWluIGFzIHdlbGwgYXMgdGhlIG5hdmJhciwgXG5cbi8vIG5leHQgSSBkaWQgdG8gYWRkIHRoZSBsb2dpYyBzbyB0aGUgdXNlciBjYW4gYWRkIHRvZG8ncywgXG5cbi8vIHJlbWVtYmVyIHRvZG8ncyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3Qgb2JqIGFycmF5LCBcblxuLy8gZmlyc3Qgd2UgcHJvYmFibHkgbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXB0dXJlIHRoZSB2YWx1ZSBcblxuLy8gb24gZWFjaCBpbnB1dCBmaWVsZCwgbGV0cyBzdGFydCB0aGVyZSwgXG5cbi8vIGEgZnVuY3Rpb24gd2lsbCBiZSBuZWVkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0IGlucHV0IGZpZWxkcyBcblxuLy8gYW5kIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGVtLCBcblxuXG5cblxuLy8gdGhpbmtpbmcgb2YgdGhlIG5leHQgc3RlcCBhZnRlciB0aGUgZGVsZXRpbmcgcHJvamVjdHMsIFxuXG4vLyB0aGF0IHdvdWxkIGJlIGdldHRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGlucHV0IGFuZCBcblxuLy8gcHVzaGluZyB0aGVtIGJhY2sgaW50byB0aGUgdG9kbyBhcnJheSB0aGF0IGVhY2ggcHJvamVjdCBjb250YWluZXJzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIGFjY2VzcyB0byB0aGF0IHRvZG8gYXJyYXksIHRyeSBhIHNpbXBsZSBsb2cgZmlyc3QgXG5cbi8vIGJ1dCB0aGUgdG9kbydzIHdpbGwgYmUgYWRkZWQgdG8gdGhlcmUgYnV0IGFsc28gaXQgbmVlZHMgdG8gYmUgXG5cbi8vIHJlZmxlY3RlZCBpbiB5b3VyIERPTSB0b28sIFxuXG4vLyBzbyB0aGlua2luZyBvZiBzb21lIHdheSB0byBhY2Nlc3MgdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoZSBvYmogXG5cblxuLy8gaWYgeW91IGNhbiBhY2Nlc3MgaXQgeW91IGFkZCB0aGUgdmFsdWVzIHRvIGl0LCBcblxuLy8gdGhlbiBvbmNlIHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBwcm9wZXJseSB3aXRoaW4gZWFjaCBvYmplY3QsIFxuXG4vLyB5b3Ugd2FudCB0byByZWZsZWN0IHRoYXQgaW4gdGhlIERPTSwgYWNjZXNzIHRoZSB0b2RvIGFuZCBkaXNwbGF5IGl0J3MgcHJvcGVydGllcyBcblxuLy8gdGhlbiBoYXZpbmcgYSB3YXkgdG8gZGVsZXRlIHRvZG8ncyBhbmQgaGF2aW5nIHRoYXQgdXBkYXRlIFxuXG4vLyB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTS4gXG5cblxuLy8gZ2V0dGluZyBwcm9qZWN0IElEIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4vLyAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuICAgICBcbi8vICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKTtcbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIGdldCB0aGUgcHJvamVjdCdzIElELCBnZXQgdGhlIElEJ3Mgd2l0aGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBhbmQgdGhlIElEJ3Mgd2l0aGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBjcmVhdGUgYSBsb29wIGluc2lkZSBlYWNoIHNlY3Rpb24gYW5kIGdldCB0aGUgdmFsdWUsIFxuXG5cblxuXG4vLyB3ZWxsIHlvdSBjYW4gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBidG4gY29udGFpbmVyIGZyb20gdGhlIERPTSwgXG5cbi8vIGNhbiB3ZSBmaWd1cmUgb3V0IGEgd2F5IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gbGV0cyB0YWtlIGEgbG9vayBhdCBob3cgdGhlIHZhbHVlIGlzIHN0b3JlZCwgXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBhbmQgc2VlIGlmIHNvbWVob3cgeW91ICBcblxuLy8gZ3JhYiBhIHZhbHVlLCBvciB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cblxuXG4vLyBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgdmFsdWVzIHd0aWhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBhIGxvb3AsIHRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdGhlIHZhbHVlJ3MgdGV4dCBjb250ZW50IG1hdGNoZXMsIHNldCB0aGUgdGV4dENvbnRlbnQgdG8gXCJcIiBvciBkZWxldGUgdGhlIGVsZW1lbnQsIFxuXG4vLyB0cnkgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHRoYXQgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdmFsdWVzIG1hdGNoLCBkZWxldGUgdGhlIHZhbHVlIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiB0aGF0IG1hdGNoZXMgbWFpbiBjb250ZW50cyB2YWx1ZSwgXG5cbi8vIGlkJ3MsIGVhY2ggcHJvamVjdCBoYXMgYSB1bnFpdWUgSUQsIGNvbXBhcmUgSUQncywgd2h5IGNhbnQgSSBkbywgaWYgdGhlIHRleHRDb250ZW50cy9zdHJpbmdzIG1hdGNoIHJlbW92ZT8gXG5cbi8vIEkgZ290IHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYWluLCBhbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB5b3VyIHByb2plY3RzLCBcblxuLy8gZG9lcyB0aGUgc3RyaW5nIG1hdGNoIHRoZSBvdGhlciBzdHJpbmcsIFxuXG4vLyBkbyBJRCdzIG1hdGNoPyBcblxuXG5cblxuXG4vLyBzYW1lIGlzc3VlLCBJIGFtIHRyeWluZyB0byBncmFiIHRoZSB2YWx1ZXMsIGFuZCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBkZWxldGUgdGhlIHByb2plY3QsIFxuXG4vLyBkZWxldGUgdGhlIHByb2plY3QgZnJvbSBib3RoIHBsYWNlcywgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGFuZCB0aGUgbGlzdCBvbiB2YWx1ZXMgaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGhvdyBjYW4gSSBkZWxldGUgYm90aCBpbiB0aGUgc2FtZSBwbGFjZSBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIFxuXG4vLyBqdXN0IGNoZWNrIHRvIHNlZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBET00sIHNlZSBpZiB5b3UgY2FuIGFkZCBhIGNsYXNzIHRvIGl0LCBcblxuXG4vLyB3aGlsZSB3ZXJlIHdhaXRpbmcgY2FuIHdlIGdldCB0aGUgcHJvamVjdHMgSUQ/IFxuXG4vLyBqdXN0IHNpbXBseSB0cnkgdG8gZ2V0IGEgcHJvamVjdHMgSUQuIGFuZCBsb2cgaXQsIFxuXG5cblxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cbi8vIG9rIHNvIEkgYW0gYWJsZSB0byB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIG9wZW5pbmcgdGhlIG1vZGFsIGFuZCBjbG9zaW5nIHRoZSBtb2RhbCwgXG5cbi8vIG5vdyB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgbG9naWMsIHRoYXQgd2lsbCBzZXQgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgbW9kYWwgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgaXQgd2lsbCBwb3AtdXAsIGNhbmNlbCBpdCB3aWxsIG5vdCBkaXNwbGF5IFxuXG4vLyBJIHRoaW5rIGp1c3QgZ3JhYmJpbmcgdGhlIHZhcmlhYmxlcyBhdCB0aGUgdG9wIGlzIGZpbmUsIGFuZCBqdXN0IGluIHRoZSBnbG9iYWwgc2NvcGUsIFxuXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHdvcmtzLCBzYXZlIGFuZCBjb21taXQsIHRoZW4gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSBkZWxldGUgYnRuIHdvcmtpbmcsIFxuXG4vLyBub3cgd291bGQgcHJvYmFibHkgYmUgdGhlIGJlc3QgdGltZSB0byBkbyB0aGF0LCBzaW5jZSB0aGUgYWRkIGJ0biBpcyB3b3JraW5nLCBub3cgd2UgY2FuXG5cbi8vIHdvcmsgb24gdGhlIGxvZ2ljLCB0aGF0IG9uY2UgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGFub3RoZXIgbW9kYWwsIGFza2luZyB0aGUgdXNlciBcblxuLy8gYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD8gSXQgd2lsbCBjbGVhciB0aGF0IHByb2plY3QgZm9yIHRoZSBET00gSW4gbWFpbiBcblxuLy8gYnV0IGFsc28gaW4gdGhlIHByb2plY3QncyBzZWN0aW9uLCBcblxuLy8vIHN0eWxlIHRoZSBtb2RhbCwgb25lIGJ0biB0byBjb25maXJtIGFuZCB0aGUgb3RoZXIgYnRuIHRvIGNhbmNlbCB0aGUgb3JkZXIsIFxuXG4vLyBPayBzbyB3ZSBoYXZlIHRoZSBwcmludCB2YWx1ZXMgdG8gdGhlIERPTSBmdW5jdGlvbiwgXG5cbi8vIGlmIHVzZXIgY2xpY2tzIHByb2plY3QgbmFtZSwgdmFsdWVzIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGlmIHVzZXIgcHJlc3NlcywgYWRkIG9yIGRlbGV0ZSwgbG9naWMgaXMgd2l0aGluIHRoZSBzYW1lIGZ1bmN0aW9uLCBcblxuLy8gSSBkb24ndCBzZWUgdGhhdCBiZWNvbWluZyBhIHByb2JsZW0sIG15IHRoaW5raW5nIGlzIHRoYXQgaXQncyBiZXR0ZXIgdG8gZG8gdGhhdCB0aGVyZSBcblxuLy8gdGhhbiBwYXNzaW5nIHRoZSB2YXJpYWJsZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBtaWdodCBhcyB3ZWxsIGRvIHRoYXQgYWxsIHRoZXJlLCBcblxuLy8gc28gdGhlIGRlbGV0ZSBidG4sIG1ha2UgdGhlIG1hcmt1cCBpbiB0aGUgSFRNTCBmaXJzdCwgZm9sbG93IHRoZSBndWlkZWxpbmVzIGJlZm9yZSwgZ28gc2xvdywgXG5cblxuLy8gbW9kYWwgaXMgd29ya2luZyBidXQganVzdCB0cnlpbmcgdG8gYWRkIHNwYWNlIFxuLy8gYmV0d2VlbiB0aGUgZWxlbWVudHMgdGhlIGNoZWNrIGFuZCB0aGUgeCwgZWxlbWVudCBcblxuLy8gb2sgZ290IHRoZSBkZWxldGUgYnRuIG1vZGFsIHdvcmtpbmcgYXMgSSB3YW50IHRvLCBuZXh0IEkgd2lsbCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LCBcblxuLy8gdGhhdCBvbmNlIGNsaWNrZWQgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwsIFxuXG4vLyBkb250IGZvcmdldCB0byBhZGQgdGhlIG92ZXJsYXkhIFxuXG5cblxuXG4vLyBuZXh0IHdpbGwgd29yayBvbiBkZWxldGluZyBhIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2ttYXJrLCBpdCBzaG91bGQgZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSwgdGhlIGFycmF5IFxuXG4vLyBhbmQgSSBiZWxpZXZlIGZyb20gbG9jYWwgc3RvcmFnZSB0b28sIHRoZW4gd29yayBvbiBzYXZpbmcgdG9kbyBpbmZvLCBmcm9tIHRoZSBtb2RhbCBhbmQgcHVzaGluZyBpbnRvIHRoZSBET00gYW5kIHN0b3JhZ2Ugd2hlcmUgXG5cbi8vIGVhY2ggcHJvamVjdCBoYXMgYSBsaXN0IG9mIHRvZG8ncywgaXQgd2lsbCBhZGRlZCB0aGVyZSB3aGlsZSBhbHNvIHJlZmxlY3RpbmcgdGhhdCBpbnRvIHRoZSBET00uIFxuXG4vLyB5ZXMgbmV4dCBzdGVwIGlzIGVpdGhlciBkZWxldGluZyB0aGUgcHJvamVjdCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBidG4sIGFuZCBnZXR0aW5nIGFsbCB0aGUgdXNlciBpbmZvIFxuXG4vLyB0aGF0IHdhcyBlbnRlcmVkIGFuZCBzYXZpbmcgdGhhdCB0b2RvLCB0byB0aGUgYXJyYXkgb2YgdG9kbydzIHRoYXQgZWFjaCBwcm9qZWN0IGhhcywgXG5cblxuXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cblxuLy8gc28gbm93IHdlIGZpZ3VyZWQgb3V0IGhvdyB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIG1vcmUgcHJvamVjdHMsIFxuXG4vLyBiYXNjaWNhbGx5IGNsZWFyIHRoZSBET00sIHRoZW4gYWRkIHByb2plY3RzLCBcblxuLy8gbm93IGFkZCB0aGUgbG9naWMsIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIG1vZGFsLCBmb3IgdGhlIHVzZXIgdG8gY3JlYXRlIGEgdG9kbywgXG5cbi8vIGZpcnN0IEkgd291bGQganVzdCB0cnkgaXQgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiBtYXliZSBzZWUgaWYgeW91IGNhbiBzcGxpdCB0aGUgY29kZSB1cCBhIGJpdCwgXG5cbi8vIHByaW50IGEgc2ltcGxlIG1lc3NhZ2Ugd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciBmaXJzdCwgXG5cbi8vIG9rIHdvcmtzIGdvb2QsIG5vdyBzdGFydCBjb25zdHJ1Y3RpbmcgeW91ciBtb2RhbCwgZm9sbG93IGFsb25nIHdpdGggdGhlIGFydGljbGUsIG9yIHZpZGVvLCBcblxuLy8gbmVlZHMgdGl0bGUsIHByaW9yaXR5LCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIFxuXG4vLyB0aG9zZSB2YWx1ZXMgYXJlIHRoZW4gYWRkZWQgdG8gdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoYXQgc3BlY2lmaWMgcHJvamVjdCwgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFNvIEkgbmVlZCB0byByZWNvbnNpZGVyIG15IGFwcHJvYWNoLCBpbnN0ZWFkIG9mIGhhdmluZyBzdG9yYWdlIHJlZmxlY3Qgd2hhdCBpcyBpbiB0aGUgRE9NLCBcblxuLy8gRE9NIGFuZCBzdG9yYWdlIGFyZSBzZXBlcmF0ZSwgd2hlbiBhIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkLCBzYXZlIHRvIHN0b3JhZ2UgYnV0IHlvdSBhbHNvIGhhdmUgcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYW5kIHdoYXRldmVyIGlzIGluc2lkZSBwcm9qZWN0cyBhcnJheSBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLCBpbiB0aGUgY29ycmVjdCBmb3JtYXQsIHlvdSBtYXkgaGF2ZSB0byBwYXJzZSBvciBzdHJpbmdpZnkgdGhlIGRhdGEgdG8gd29yaywgXG5cbi8vIHJlZmxlY3Qgd2hhdGV2ZXIgaXMgaW4gdGhlIHByb2plY3RzIGFycmF5IHRvIHRoZSBET00uIFxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbigpIHsgXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiSGV5IHRoaXMgd29ya3NcIik7XG4vLyAgICB9XG4gICBcblxuXG4vLyAtLSBvbmUgaXNzdWUgSSBub3RpY2UgaXMgdGhhdCBpZiBJIGFkZCBhIHByb2plY3QgbmFtZSwgSSBoYXZlIHRvIHJlZnJlc2ggZm9yIGl0IHRvIGdldCBpdCB0b28gc2hvdy4gISEhXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8gbmV4dCBpcyB0byB0YWtlIHRoZSB2YWx1ZXMvcHJvamVjdCBuYW1lcyB0aGF0IGFyZSBpbiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFuZCBhcHBlbmQgdGhvc2UgdG8gdGhlIERPTSwgXG4vLyBmaXJzdCBqdXN0IHRyeSB0byBncmFiIHRoZSBlbGVtbmVudCBhbmQgYXBwZW5kIHZhbHVlIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gd29yayBmcm9tIHRoZXJlLCBcblxuXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBkbyBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uIFxuXG4vLyBub3cgdHJ5IHRvIHNlcGVyYXRlIGl0LCBwdXQgdGhhdCBsb2dpYyB3aXRoaW4gdGhlIERPTSBNb2R1bGUsIHRoZW4gb25jZSB5b3UgZ2V0IHRoYXQgd29ya2luZywgc3R5bGUgd2l0aGluIHNlcGVyYXRlIHNoZWV0LCBcblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGJsYWggaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKGJsYWgpXG4vLyAgIG5ld0FycmF5LnB1c2goYmxhaCk7XG4vLyB9O1xuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBwcm9qZWN0IGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIG5ld0FycmF5LnB1c2gocHJvamVjdCk7XG4vLyB9OyAgICBcblxuXG5cbi8vIHRoaXNcbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGluZGV4IGluIHNvbWVBcnJheSkge1xuLy8gLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4vLyBsZXQgeCA9IE9iamVjdC52YWx1ZXMoc29tZUFycmF5KTtcblxuLy8gLy8gY29uc29sZS5sb2coeCk7XG5cbi8vICAgbmV3QXJyYXkucHVzaCh4KTtcblxuLy8gICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4vLyB9O1xuXG5cblxuXG5cblxuLy8gSSB3aWxsIG5leHQgd3JpdGUgYSBmdW5jdGlvbiB3aXRoaW4gRE9NIGxvZ2ljLCB0aGF0IHdpbGwgZ2V0IHRoZSBsb2NhbCBzdG9yYWdlLCBncmFiIHRoZSBwcm9qZWN0IG5hbWVzLCB0aGVuIHByaW50IHRoZW0gdG8gdGhlIERPTSwgd2l0aCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gaWYgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgYXR0YWNoIGEgbGlzdGVuZXIsIHRoZW4gd2l0aGluIGxpc3RlbmVyIGxvZ2ljIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBET00sIGluIGJvdGggcGxhY2VzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIHRvIGNsZWFyIG1haW4gY29udGVudCB0byBtYWtlIHdheSBmb3IgdGhlIG5ldyBjb250ZW50LCB1c2luZyByZXBsYWNlIGNoaWxkLCBcblxuLy8geW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG9iaiB0byBhIHN0cmluZywgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHByb3BlciBmb3JtYXQgYmVmb3JlIGFwcGVuZGluZywgXG5cbi8vIGlmIGp1c3QgbmVlZHMgdG8gYmUgdGhlIHN0cmFpZ2h0IHByb2plY3QgbmFtZSwgXG5cbi8vIHNvIG9uY2UgY2xpY2tlZCBwb3B1bGF0ZSB3aXRoIHR3byBidXR0b25zLCBkZWxldGUsIGFuZCBhZGQgYnRuLCBpZiBhZGQgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGZvcm0gd2hpY2ggd2lsbCBzYXZlIGRhdGEgYW5kIGFkZCB0byB0b2RvJ3Mgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhcHBlbmQgdGhvc2UgdG9kbydzIHRvIHRoZSBET00gYXMgdGhleSBhcmUgYWRkZWQsIGFuZCByZW1vdmUgaWYgdGhleSBhcmUgZGVsZXRlZC4gXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkuY2xlYXIoKTsgXG5cblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBwcm9ibGVtcywgb24gc3RvcmFnZSB3aXRoIHRvZG8gbGlzdCwgbXkgZGF0YSBpcyBiZWluZyBzdG9yZWQgY29ycmVjdGx5LCAgXG5cbi8vIGJ1dCBJIGFtIG5vdGljaW5nIG15IHByb2plY3QgbmFtZXMgYXJlIGtlZXAgZ2V0dGluZyBuZXN0ZWQgaW5zaWRlIG11bHRpcGxlIGFycmF5J3MsIGN1cnJlbnRseSBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYXJlIG1hZGUgaW50byBvYmplY3RzIHRoZW4gb2JqZWN0cyBhcmUgcGFzc2VkIHRvIGFycmF5IGZvciBzdG9yYWdlLCBvbmNlIHRoZSBwYWdlIHJlbG9hZHMsIFxuXG4vLyBJIHBhcnNlIHRocm91Z2ggdGhlIGRhdGEgaW4gc3RvcmFnZSwgYW5kIHB1c2ggdGhlIGRhdGEgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGRhdGEgaXMgc2F2ZWQsIFxuXG4vLyBsaWtlIEkgc2FpZCwgYXJyYXkncyBhcmUgYmVpbmcgbmVzdGVkIHdpdGhpbiBtdWx0aXBsZSBsZXZlbHMgYW5kIEknbSBub3Qgc3VyZSB3aHkuIFxuXG4vLyBwaWN0dXJlIGF0dGFjaGVkIGFuZCBzb21lIHNuaXBwZXRzIG9mIG15IGNvZGUgYXR0YWNoZWQgZm9yIGNvbnRleHQsIEkgY2FuIGFsc28gYXR0YWNoIG15IHJlcG8gaWYgdGhhdCBoZWxwcyB0byBmdXJ0aGVyIGRlYnVnIHRoaXMsIFxuXG5cblxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICIsIlxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG4gXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlU2V0SXRlbShuYW1lKSB7IFxuXG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTsgIFxuICAgIFxuICAgIFxuICAgIFxufSBcblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVRvZG9JdGVtcyhwcm9qZWN0KSB7IFxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpOyBcbiAgICBcbi8vICB9XG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0b3JhZ2UoKSB7IFxuLy8gICBsZXQgZ2V0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4gIFxuLy8gICBjb25zb2xlLmxvZyhnZXROYW1lKTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqID0gcHJvamVjdE5hbWVGYWN0b3J5KGdldE5hbWUpOyBcblxuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZU9iaik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBteSBnb2FsIGlzIHRvIGhhdmUgaW5kaXZkdWFsIHByb2plY3QgbmFtZSBvYmplY3RzLCBcblxuLy8gSSBhbSBhYmxlIHRvIGNyZWF0ZSBwcm9qZWN0IG5hbWVzLCBidXQgd2hlbiBJIHVzZSBvYmplY3RzIGl0IG9ubHkgYWRkcyBvbnRvLCBhbmQgZG9lcyBub3QgY3JlYXRlIHVuaXF1ZSBwcm9qZWN0cy4gXG5cbi8vIFxuXG5cblxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnIgPSBbXTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gdmFsdWVbaV07IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUlucHV0KTtcbi8vICAgICAgICAgYXJyLnB1c2gocHJvamVjdE5hbWVJbnB1dCk7XG5cbi8vICAgICB9IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycik7IFxuLy8gICAgIHJldHVybiBhcnI7IFxuLy8gfSBcblxuLy8ganVzdCBhZGQgdmFsdWVzIHRvIHRoZSBhcnJheSBcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUodmFsdWUpIHsgXG5cbi8vICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZVN0b3JhZ2UpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0TmFtZShcImFsZWNcIik7IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGxldCBnQXJyYXkgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4vLyAgICAgICAgIHJldHVybiBhcnJheTtcbi8vICAgICB9XG4vLyB9KCkpOyBcblxuLy8gZ0FycmF5KDEpOyBcbi8vIGdBcnJheSgyKTsgXG4vLyBnQXJyYXkoMyk7IFxuLy8gZ0FycmF5KDQpOyBcblxuLy8gIGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnJheSA9IFtdOyBcbi8vICAgICBjb25zb2xlLmxvZyhhcnJheSlcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gY2FsbFRoaXMgKHZhbHVlKSB7IFxuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTsgXG4vLyAgICAgICAgIHJldHVybiBhcnJheVxuLy8gICAgIH0gXG4vLyB9IFxuXG4vLyBzdG9yZVVzZXJWYWx1ZSgpO1xuXG5cblxuXG5cblxuLy8gZmluZCB3YXkgdG8gYWRkIGl0ZW1zIG9udG8gYW4gYXJyYXksIEkgZG9uJ3QgdGhpbmsgaXQncyBzbWFydCB0byBhZGQgb25lIGF0IGEgdGltZSwgYnV0IG1vcmUgc28gbGlrZSBhZGRpbmcgcHJvamVjdHMgb250byBhIHNpbmdsZSBhcnJheSBcblxuICAgIC8vIHRoaW5rIG9mIGEgd2F5IHRvIGFkZCBpbnRvIGFuIGFycmF5LCBsb29rIGludG8gY2xvc3VyZSBhbmQgYWRkaW5nIG9udG8gYW4gYXJyYXkgdXNpbmcgY2xvc3VyZS4gXG5cbiAgICAvLyBjbG9zdXJlIHNlZW1zIGxpa2UgdGhlIHJpZ2h0IGlkZWEgYnV0IGhvdyBjYW4gSSBtYWtlIHRoaXMgd29yayB3aXRoIHRoZSBjdXJyZW50IGNvZGUgSSBoYXZlPyBcblxuICAgIC8vIHdlbGwgSSB0aGluayBJIGRpZCBmaW5kIGEgd2F5IHRvIHN0b3JlIHRoZSBwcm9qZWN0IG5hbWVzLCBqdXN0IHNvbWV0aGluZyBkb2Vzbid0IHNlZW0gcmlnaHQgYWJvdXQgdGhlIHN0b3JhZ2VcblxuICAgIC8vICBcblxuLy8gdGhhdCBhcnJheSBjYW4gYmUgcGFydCBvZiBhbiBvYmosIGtleSBpbnRvIHRoZSBhcnJheVxuXG4vLyBidG4gcHJvYmxlbSwgYXBwZW5kaW5nIHRvbyBtYW55IGlucHV0IGZpZWxkcywgY29uZGl0aW9uYWwgdG8gcHJldmVudCBcblxuLy8gY29ycmVjdCBhcnJheSBzdG9yYWdlIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGNvcnJlY3RseSBcbiBcbi8vIHByb3Blcmx5IGluc3RhbGxpbmcgYW5kIHVzaW5nIHNhc3MgYWZ0ZXIgdGhlIGFib3ZlIGlzIGFjY29tcGxpc2VkLiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=