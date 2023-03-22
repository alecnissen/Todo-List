import { addProjectFormInput, appendProjectNameToDOM, userInputValue } from "./domLogic"; 

import "./eventListenerModule"; 

// console.log(projectContainer); 

// if the container, includes the element, remove it  

// What I want: after user enters name of project and hits add button, 
// I want the input field to be removed to make way for a new project, 
// 
// Problem: The input field container not being removed after using conditional logic, 

// what I've tried: After the element is added to the DOM, I call a function in a module 

// which checks if the container includes that element, if so remove the container, 

// remove the input field, after the value has been added to the DOM 

// to make way for a new element, 

// look at previous post for reason 

// What I am trying to do, is remove the projects container 

// once the user enters the name of project from the input field 

// I need a DOM method to remove the container, if the container 

// contains that value, 

// DOM methods for finding out if the container has the child 

console.log(userInputValue);

export function checkForDOMValue() { 

    let projectDOMContainer = document.getElementById("input-field-container"); 

    let children = projectDOMContainer.children; 

    // let arr = Array.from(projectDOMContainer);

   console.log(children);

    // console.log(children);
    // let newArr = Array.from(projectDOMContainer); 

    // console.log(projectDOMContainer); 

    if (projectDOMContainer.children === userInputValue) {
        console.log("test");
        projectDOMContainer.remove();
    } else { 
        return
    }
} 

