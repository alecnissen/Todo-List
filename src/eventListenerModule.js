

// import { once } from "events";
import { removeInputFieldContainer } from "./conditionalLogic";
import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic";
import { storeProjectName } from "./arrayStorage"; 


const addProjectButton = document.getElementById("add-project-btn"); 

// if a condition is met run this block below? 
// if input field is blank, don't run 

// let inputFieldText = document.getElementsByClassName("input-field-text");

// if (inputFieldText.textContent === '') { 
  
// }


 addProjectButton.addEventListener("click", function(){ 
 
   addProjectFormInput();

   
   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => { 

    let userValue = document.getElementsByClassName("input-field-text")[0].value;

    // console.log(userValue2);

    // console.log(userValue);

    // if (userValue === "") { 
    //   addProjectButton.disabled = "true";
    // }  // if user value has been appended to DOM 

    storeProjectName(userValue); 

    appendProjectNameToDOM(userValue); 

  


    // once appended to the DOM, call another function stores that value into an array 

    let projectDOMContainer = document.getElementById("input-field-container");

    let inputFieldTextElement = document.querySelector(".input-field-text");

    let inputFieldTextValue = inputFieldTextElement.value; 

    if (inputFieldTextValue === userValue) { 
      projectDOMContainer.textContent = "";
    } else { 
      return 
    } 
  }) 

   let cancelBtn = document.querySelector(".cancel-btn"); 

  //  cancelBtn.disabled = "true";

   cancelBtn.addEventListener("click", function(){
    let projectDOMContainer = document.getElementById("input-field-container"); 
    projectDOMContainer.textContent = "";
   })
})







// if userValue is === '' empty, then disable btn, if not, enable btn so it can be clicked again, 

// trying to think of the logic, to make sure only one input field can be generated at a time, 

// user should not be able to press add project and add multiple input fields, 

// once the value is entered, the btn can be pressed again. 

  // here, the function will need to called when a condition is met. 

  // what is the condition? cannot press the btn unless the current 

  // if  



// cancel btn functionality works, same with add btn, 

// is there a way I can fix the user from hitting the add project btn, before a project has been added? 

// btn can only be clicked once the add btn has been pressed, 


// next step would to try to work on the logic that prevents a user from adding another project 

// if the value/name has not been added, 

// understand how the element is being appended, 

// 




// apply the same logic with the cancel btn, 

// access the cancel btn element, use a selector, 

// 


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





