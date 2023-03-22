
// call a function which handles DOM logic
// export then import within another file 

import "./eventListenerModule"; 

import { checkForDOMValue } from "./conditionalLogic";

export function addProjectFormInput() {
  const inputField = document.createElement("input");

  inputField.classList.add("input-field-text");

  inputField.placeholder = "Name your project";

  const btnContainer = document.createElement("container");

  btnContainer.classList.add("btn-container");

  const addBtn = document.createElement("button");

  addBtn.textContent = "Add";

  const cancelBtn = document.createElement("button");

  cancelBtn.textContent = "Cancel";

  addBtn.classList.add("add-btn");

  cancelBtn.classList.add("cancel-btn");

  const inputContainer = document.getElementById("input-field-container");

  inputContainer.classList.add("project-input-field-container");

  inputContainer.appendChild(inputField);

  btnContainer.appendChild(addBtn);

  btnContainer.appendChild(cancelBtn);

  inputContainer.appendChild(btnContainer);
} 


// currently getting user input from the field, appending to project section 
// find a way to append that project name to the main content section, 
// use same process, 

// I want to appned the projects name to the main content section, 
// then figure out a way to append different types of projects 
// append a new projects based on user input not just one, 

// only appending in one place, why? I think it is because I am only creating one div element, 

// now it is appending in both places, I created another div element, then added text and appended 

// find a way to append different projects, 

// once the project is added, find way to remove the input field and just have 
// just the project showing, 

// lets first work on removing the input field after user enters value, 
// just the project should be showing, 

// In order to make get multiple input values 
// understand how the input value is getting it's value 


// you will need a type of conditional, if the value is entered, user presses add, remove the input field from the DOM, 
// -1 Have user enter different project names, 
// -2 once entered remove from the DOM only, remove the input field, 
// -3 store variables in local storage 


// Do I first have to remove it? Why grab different btn

// should be once user clicks add, store value in both places 
// then remove the input field, and have user click 
// the add project button again. 

// focus on how you can remove the input field after the user clicks add 

// if the element/value has been appended to the DOM 
// remove the DOM elements w/ the input field 

// call a function  within your DOM function, 

// conditional, if user pressed add, and element is appended 

// remove the input field, 

// I'm confused on how I can remove the input field after the add btn is pressed, 

// once the btn is pressed, add the value, check if value has been added then 
// remove the input field, 





export function appendProjectNameToDOM(value) { 
  // getting the user value
  let userInputValue = value; 

  // getting the project container, 
  // let projectContainer = [...document.querySelectorAll(".navbar-your-projects-container")]; 

  let projectContainer = document.querySelector(".navbar-your-projects-container"); 

  let mainContentProjectContainer = document.querySelector(".main-content-section-container"); 

  // console.log(mainContentProjectContainer); 

  let projectNameElement = document.createElement("div"); 

  let projectNameElementMain = document.createElement("div");

   projectNameElement.innerText = userInputValue;

   projectNameElementMain.innerText = userInputValue;

  // console.log(projectContainer);

  // projectContainer.push(userInputValue); 

  projectContainer.appendChild(projectNameElement);

  mainContentProjectContainer.appendChild(projectNameElementMain); 

  checkForDOMValue();

} 






// I'm able to get the user value, I am able to log out it's value, I am able to grab the projects container section,

// it still returns and HTML element, I can turn it into an array, but I am unsure of how to append to the DOM. 


// what I want, the user will enter project name, I want that name to appear in the project's section and main content section(blue part); 

// Problem: I am confused on how to append this project name to the DOM. 

// What I've tried: Once the add btn is pressed, the value/name of project will be saved, and passed to a function which takes that 

// value and prints to the DOM. 

// I am able to access the project container, and the main section but it's an HTML collection, I can convert it into an array, 

// but how can I append an array to the DOM? 