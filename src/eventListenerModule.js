// get the add project button, from the HTML 

// add the event listener to it  

// import "src/domLogic.js"; 

// import "./domLogic"; 
import { addProjectDOMStuff } from "./domLogic";

let addProjectButton = document.getElementById("add-project-btn"); 

  addProjectButton.addEventListener("click", function(){
    // call the DOM Methods, associated with that button, 
    // write a simple console log first to test to see if it's working 
    
   // call the DOM methods 

   console.log("this is working, I am referencing my event module");

   console.log('aleccc');

   addProjectDOMStuff();

}) 



