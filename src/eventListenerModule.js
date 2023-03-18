// get the add project button, from the HTML 

// add the event listener to it  

// import "src/domLogic.js"; 

// import { addBtn } from "./domLogic";  

import { addProjectDOMStuff } from "./domLogic";

const addProjectButton = document.getElementById("add-project-btn"); 

  addProjectButton.addEventListener("click", function(){
    // call the DOM Methods, associated with that button, 
    // write a simple console log first to test to see if it's working 
    
   // call the DOM methods

   console.log("this is working, I am referencing my event module");

   console.log("alec");

   addProjectDOMStuff();

}) 

// grab add btn element, add a listener to it 

// let addProjectToDOMBtn = document.getElementsByClassName("add-btn")[0]; 

const addProjectToDOMBtn = document.querySelectorAll("add-btn");

const newArr = Array.from(addProjectToDOMBtn);

console.log(newArr);

console.log(addProjectToDOMBtn); 










// const newArray = Array.from(addProjectToDOMBtn);

// console.log(newArray);

//  newArray.addEventListener("click", function(){
//   console.log("1, 2, 1, 2"); 
// })

// const arr = Array.from(addProjectToDOMBtn);

// console.log(addProjectToDOMBtn);

// console.log(arr);

// console.log(addProjectToDOMBtn);





