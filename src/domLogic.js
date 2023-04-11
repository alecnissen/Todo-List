// import arrayStorage from "./storage";
// import defaultExport { arrayStorage } from "./storage";
// import myExport from "./storage"; 

import "./storage";

import arrayStorageSetItem from "./storage.js" 

import getItemStorage from "./storage.js"; 

import  projectNameLoop from "./index.js";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

let modalInputField = document.getElementById("input-field-within-modal"); 

let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

let formTagForModule = document.getElementById("form-tag-for-modal"); 

export let projectArray = []; 

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

  arrayStorageSetItem(projectArray); 

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



export function printValuesToDOM(array) { 

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

 export function printProjectNameToNavbarProjectSection(value) { 

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