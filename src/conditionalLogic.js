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


// What I want: To add the functionality and logic behind my buttons. If the user presses add btn, it will add it to the DOM 

// then it will remove the input field container once the project has been added, 

// I also want the user to be able to click on add project btn again, so they can add another project, 

// problem: Currently user can only add one project, the btn logic does not work after, 

// What I've tried: I've tried using a conditional to check if the input field 

// if input field text field container userValue,  

// log it's variable 

console.log(userInputValue);

export function checkForDOMValue() { 

    let projectDOMContainer = document.getElementById("input-field-container"); 

    let children = projectDOMContainer.children; 

    let lastChild = projectDOMContainer.lastChild; 

    // let arr = Array.from(projectDOMContainer);


    // console.log(children);
    // let newArr = Array.from(projectDOMContainer); 

    // console.log(projectDOMContainer); 

    // if (lastChild.contains(userInputValue)) {
    //     console.log("test");
    //     projectDOMContainer.remove();
    // } else { 
    //     return
    // }
} 

