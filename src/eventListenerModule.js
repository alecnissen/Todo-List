

import { checkForDOMValue } from "./conditionalLogic";
import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic";

const addProjectButton = document.getElementById("add-project-btn"); 

  addProjectButton.addEventListener("click", function(){

  addProjectFormInput(); 
   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => { 

    let userValue = document.getElementsByClassName("input-field-text")[0].value; 

    appendProjectNameToDOM(userValue); 

     let projectDOMContainer = document.getElementById("input-field-container");

     let inputFieldTextElement = document.querySelector(".input-field-text");

     let inputFieldTextValue = inputFieldTextElement.value; 

    console.log(inputFieldTextElement); 

    if (inputFieldTextValue === userValue) { 
      projectDOMContainer.remove(); 
    } else { 
      return
    }

  }); 
}) 


// what I want to do, is after the project is appended to the DOM section, remove the container, 

// but allow the user to enter another project, with another name and enter it, 

// when I press the add project btn and enter a different name, it will only 

// output the first name that was entered, 

// the functionality is that the user clicks, add project, input field generated, name is added, 

// when user presses add, it will get added to the containers, input field removed, 

// the add project btn should still have functionality, allowing the user to enter another project, 

// try to put the logic outside of the loop 
















// i can access the value, that the user entered, now I need to find a way to append to the DOM. 

// appending value works, grab the target containers and append there. 




// access the input field element, append to DOM 






// grab add btn element, add a listener to it 

// let addProjectToDOMBtn = document.getElementsByClassName("add-btn")[0]; 




// const addProjectToDOMBtn = document.querySelectorAll(".add-btn");

// const newArr = Array.from(addProjectToDOMBtn);

// newArr.forEach(button => {
//   console.log(button);
//   button.addEventListener("click", function(e){
//     console.log("Hey, inside a clicker!");
//   });
// })


// document.querySelectorAll(".add-btn").forEach( button => {
//   console.log(button);
//   button.addEventListener("click", function(e){
//     console.log("Hey, inside a clicker!")
//   });
// })









// const newArray = Array.from(addProjectToDOMBtn);

// console.log(newArray);

//  newArray.addEventListener("click", function(){
//   console.log("1, 2, 1, 2"); 
// })

// const arr = Array.from(addProjectToDOMBtn);

// console.log(addProjectToDOMBtn);

// console.log(arr);

// console.log(addProjectToDOMBtn);





