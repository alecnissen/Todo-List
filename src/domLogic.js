
// call a function which handles DOM logic
// export then import within another file 

import { some } from "lodash";
import "./eventListenerModule"; 

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


export function appendProjectNameToDOM(value) { 

  let userInputValue = value;  

  let projectContainer = document.querySelector(".navbar-your-projects-container"); 

  let mainContentProjectContainer = document.querySelector(".main-content-section-container"); 

  let projectNameElementProjectSection = document.createElement("div"); 
  // get the element and try to use it inside event listener module, 
  projectNameElementProjectSection.classList.add("project-section-name-btn-div");

  projectNameElementProjectSection.setAttribute("id", "project-element-from-navbar-section"); 

  console.log(projectNameElementProjectSection);

  let projectNameElementMain = document.createElement("div"); 

  projectNameElementMain.classList.add("main-content-section-project-name-div");

  projectNameElementProjectSection.innerText = userInputValue;

  projectNameElementProjectSection.addEventListener("click", function(e){ 

    // Should go into seperate module, you have listener within your dom, 

    // you need to access that element within the listener, using selector of some sort, 

    // add the listener, then call a DOM function which will handle the properties, 

    console.log("Hey I'm in here");
    projectNameElementMain.innerText = userInputValue;
    mainContentProjectContainer.appendChild(projectNameElementMain); 

    let someBtn = document.createElement("button");

    
    someBtn.addEventListener("click", function(){
      someBtn.style.display = "none";
      let div = document.createElement("div"); 
      div.classList.add("todo-pop-up-practice");
      div.textContent = "To-Do Task Form";
      // div.style.color = "red";
      let inputs = document.createElement("input");
      inputs.style.display = "flex"; 
      inputs.style.flexDirection = "column";
      inputs.style.justifyContent = "center";
      inputs.style.alignItems = "center";
      // div.appendChild(inputs);
      mainContentProjectContainer.appendChild(div);
      mainContentProjectContainer.appendChild(inputs);
    })

    someBtn.textContent = "Add ToDo";

    mainContentProjectContainer.appendChild(someBtn); 

  }) 


projectContainer.appendChild(projectNameElementProjectSection);



} 


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