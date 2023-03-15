

// make a factory function for projects

// make factory function for to-do/subtasks within the project.

// map logic for adding projects to the main content section, 

// a factory function creates a project object, 

// you now have to find a way to add the project name to the main content section 

// that would probably involve appending it to the DOM. 

// the buttons within each project will need logic, 

// once you type in the name of the project and press add 

// that project will need to be added to the main content section, within a 

// data struture like an array, obj, etc, and also displayed to the DOM so the user can see. 

// add btn needs functionality, it must add it to the main content section, then append to the DOM 

// once appended to the DOM, you will need to add subtasks to the project using factory function 

import '../style.scss';


const projectFactory = (title, description, dueDate, priority) => {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  };
}; 

let project1 = projectFactory('todo-list', 'some thing', 'today', 'high'); 

console.log(project1);

 document.getElementById("add-project-btn").addEventListener("click", function(){
    const inputField = document.createElement("input");

    inputField.classList.add("input-field-text");

    inputField.placeholder = 'Name your project';

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

}) 


// test to see if add functionality works, just make an element with text and 

// then append to the main content section container. 

// I want to get the add button working, 

// once clicked it will take the value the user entered, add to the projects section as well 

// as the main content section. 

// the project section, button to create a project, 

// add functonality to add button, once clicked it should add the project to the projects section, 

// adds the project to the main content section.  

let addBtn = document.getElementsByClassName("add-btn");

console.log(addBtn);

addBtn.addEventListener("click", function() { 
  let addButtonProjects = document.querySelector('.main-content-section-container'); 

  console.log(addButtonProjects);

  console.log(inputContainer);

  let text = document.createElement('p'); 

  text.textContent = 'Hello this is a project being added'; 

  inputContainer.appendChild(text); 

})