// get the add project button, from the HTML 

// add the event listener to it  

// import "src/domLogic.js"; 

// import { addBtn } from "./domLogic";  

import { addProjectDOMStuff } from "./domLogic";

const addProjectButton = document.getElementById("add-project-btn"); 

  addProjectButton.addEventListener("click", function(){

   console.log("this is working, I am referencing my event module");

   console.log("alec");

   addProjectDOMStuff(); 

   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => {
    let ele = document.createElement('p'); 
    ele.textContent = 'yooyyo';
    console.log(ele);
    console.log("Hey, I am inside a clicker!", e.target);
   });

  //  .at(-1).addEventListener("click", (e) => {
  //   console.log("Hey, I am inside a clicker!", e.target);
  //  });
}) 

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





