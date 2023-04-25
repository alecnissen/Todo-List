
import "./domLogic";

// import { projectArray } from "./domLogic";

 import { projectArray, printProjectNameToNavbarProjectSection, printValuesToDOM } from "./domLogic";


export default function arrayStorageSetItem(name) { 

    
    localStorage.setItem("Project-Names", JSON.stringify(name));  
    
    
    
}  

// export function updateArrayStorage(item) { 
//     let thisProject = item; 

//     console.log(thisProject);
// }


// what properties would the updateStorage function have? 

// what would it take in? 

// I think you might have to update the array, 

// or filter out the items that were deleted, 

// then pass that to update storage, 


// so now next, I need to figure out how to 

// update my storage and array based on when user deletes 

// a single todo item, 

// something will need to be passed to local storage, 

// how can storage reflect changes in the DOM, 

// project is deleting from the DOM, but it still shows in array 

// and still shows in local storage, 

// after the project is deleted from the DOM, 

// the printValueToDOM function will need to be called again 

// so that can reflect the local storage to the DOM, 

// so I think the project array is going to be passed to local storage, 

// then the printvalue to dom function needs to called, so shwo to the DOM 

// what is inside local storage 

// continue to brainstorm how to reflect the change in deleting 

// projects from the DOM and how to update that in local storage. 



//  export function arrayStorageTodoItems(project) { 

//     localStorage.setItem("todoItems", JSON.stringify(project)); 
    
//  }






// export function getItemStorage() { 
//   let getName = localStorage.getItem("Project-Names"); 
  
//   console.log(getName); 

//   let projectNameObj = projectNameFactory(getName); 

//   console.log(projectNameObj);
// }






// my goal is to have indivdual project name objects, 

// I am able to create project names, but when I use objects it only adds onto, and does not create unique projects. 

// 




//     localStorage.setItem("user-input", projectArray); 

//     const projectNameStorage = localStorage.getItem("user-input");


















// export function storeUserValue(value) { 
//     let arr = [];

//     for (let i = 0; i < value.length; i++) { 
//         let projectNameInput = value[i]; 
//         console.log(projectNameInput);
//         arr.push(projectNameInput);

//     } 
//     console.log(arr); 
//     return arr; 
// } 

// just add values to the array 
// let projectArray = [];

// export function storeProjectName(value) { 

//     projectArray.push(value);

//     localStorage.setItem("user-input", projectArray); 

//     const projectNameStorage = localStorage.getItem("user-input");

//     // console.log(projectNameStorage);

//     // console.log(projectArray);
// } 




// function createProjectName(projectName) { 
//     return { 
//         projectName: projectName,
//     }
// }

// let newProject = new createProjectName("alec"); 

// console.log(newProject);
// let gArray = (function () {
//     let array = [];
//     return function (value) {
//         array.push(value);
//         return array;
//     }
// }()); 

// gArray(1); 
// gArray(2); 
// gArray(3); 
// gArray(4); 

//  function storeUserValue(value) { 
//     let array = []; 
//     console.log(array)
//     return function callThis (value) { 
//         array.push(value); 
//         return array
//     } 
// } 

// storeUserValue();






// find way to add items onto an array, I don't think it's smart to add one at a time, but more so like adding projects onto a single array 

    // think of a way to add into an array, look into closure and adding onto an array using closure. 

    // closure seems like the right idea but how can I make this work with the current code I have? 

    // well I think I did find a way to store the project names, just something doesn't seem right about the storage

    //  

// that array can be part of an obj, key into the array

// btn problem, appending too many input fields, conditional to prevent 

// correct array storage 

// local storage correctly 
 
// properly installing and using sass after the above is accomplised. 