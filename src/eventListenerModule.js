

// import { once } from "events";
import { removeInputFieldContainer } from "./conditionalLogic";
import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic";



const addProjectButton = document.getElementById("add-project-btn"); 



 addProjectButton.addEventListener("click", function(){ 
  // only call once the containers have a child / or an element inside it. 

  addProjectFormInput(); 
   
   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => { 

    let userValue = document.getElementsByClassName("input-field-text").length.value;

    // if (userValue === "") { 
    //   addProjectButton.disabled = "true";
    // }  // if user value has been appended to DOM 

    // if the recent user value has been appended to the DOM 

    appendProjectNameToDOM(userValue); 

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




// the problem is I am trying to prevent the user from clicking the add project button mutliple times and appending multiple projects 

// the value should be added, only after the user 

// how to stop making input fields, 

// I am able to click the add project btn, if I enter any value in there, only the first value is taken 

// when the btn is clicked an input field is generated, how to stop an input field from being generated? Unless the user has entered a value and value is in DOM, 

// I want to prevent the user from clicking the btn multiple times, and adding mutiple input fields before, the btn should only add after the user entered 

// focus on the add btn, 

// if value is not attached to the DOM the user cannot add another input field 

// maybe I need to add these elements to an array, which will store all the projects 

// Then I can check if that project is in the array, if it is remove it 




// so after you figure out the button ading issues 

// you need to find a way to get the prjects name and store them into an array 

// store the data, array of data/projects and that data being reflected in the DOM, 

// check library project for inspriation 

// look at how the data is being stored and the array data the DOM will reflect that data, 

// dom will look at the array and update accordinoly 

// then since you are storing it into an array you will need to add that to local storage too 

// then find a way to link your sass so it works properly 

// once you figure out the btn and array storage, style the page with sass then move back to logic. 

// spend a little time trying to understand, think of a potential solution to the add  project btn issues 

// user should be able to only click the btn once, one project should be added at a time, 

// should not be able to hit the add project btn, multiple times, one project should be added at a time 

// Hello everyone I am running into a small problem with to-do list, I think it would be good to tackle this now before moving on 

// what I want: Only one input field should be generated at a time, the user should not be able to press the btn multiple times, and generate 

// multiple input fields, it should only append one project at a time, how can I prevent the user from generating input fields before the user has entered a value 

// from the previous input field? 

// I've tried using conditionals that if the user value is empty, disable the btn, 

// mostly of just been thinking of conditionals, and how to implement them, and looking over my code and trying to understand how things are running, 

// and when the function is being called 

// I'm still stuck and struggling to figure this out. 