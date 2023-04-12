import { projectArray, printProjectNameToNavbarProjectSection, printValuesToDOM } from "./domLogic"; 

function projectDisplayConditionalLogic() { 

    console.log("HEYYY");

    // let theProjectArray = arr;

    // for (let i = 0; i < theProjectArray.length; i++) { 
    //     let projectArrayIndex = theProjectArray[i]; 

    //     console.log(projectArrayIndex);
    
    // }
} 

projectDisplayConditionalLogic(); 



// I am getting a little confused on how to add conditional logic, that will prevent a user from adding mutliple projects when the user presses the project name, 

// Once project is clicked, display that project, if another project is clicked, clear the old and make way for the new, 

// I've been trying to call the function before the values are appended, to check if It's safe to append the value or clear and make way for a new one, 

// how can I prevent user from clicking multiple projects, and adding them all, 

// you cant disable the btn, 

// you cannot mix the DOM logic and conditional logic, 

// thinking conceptually, right now the user can press the project name and append multiple projects, 

// how can I just display the project that was clicked on? 

// clear the contents of one and make new. 