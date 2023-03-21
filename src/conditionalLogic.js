import { addProjectFormInput, appendProjectNameToDOM, userValue } from "./domLogic"; 

import "./eventListenerModule"; 

// console.log(projectContainer); 

// if the container, includes the element, remove it  

// What I want: after user enters name of project and hits add button, 
// I want the input field to be removed to make way for a new project, 
// 
// Problem: The input field container not being removed after using conditional logic, 

// what I've tried: After the element is added to the DOM, I call a function in a module 

// which checks if the container includes that element, if so remove the container, 

export function checkForDOMValue() { 
    console.log("Test");
    let projectDOMContainer = document.getElementById("input-field-container"); 

    if (projectDOMContainer.includes(userValue)) { 
        projectDOMContainer.remove();
    } else { 
        return
    }
} 