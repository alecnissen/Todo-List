

import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic";

const addProjectButton = document.getElementById("add-project-btn"); 

  addProjectButton.addEventListener("click", function(){

  //  console.log("this is working, I am referencing my event module");

  addProjectFormInput(); 

   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => {
    // console.log("Hey, I am inside a clicker!", e.target); 

    let userValue = document.getElementsByClassName("input-field-text")[0].value; 

    let projectNameElement = document.createElement("div"); 

    projectNameElement.innerText = userValue;

    appendProjectNameToDOM(projectNameElement);
  
    
  });
}) 



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





