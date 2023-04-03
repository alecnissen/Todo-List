const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.querySelector(".btn-close");




























// import { add, intersection } from "lodash";


// const openModalButtonAddProjectName = document.querySelectorAll("[data-modal-target]"); 


// const closeModalButtons = document.querySelectorAll("[data-close-button]"); 

// const overlay = document.getElementById("overlay"); 

// openModalButtonAddProjectName.forEach(button => { 
  //   button.addEventListener("click", () => { 
    //     const modal = document.querySelector(button.dataset.modalTarget);
    //     openModal(modal);
    //   })
    // }) 
    
    // closeModalButtons.forEach(button => { 
      //   button.addEventListener("click", () => { 
        //     const modal = button.closest(".modal");
        //     closeModal(modal);
//   })
// }) 




// function openModal(modal) { 
  //   if (modal == null) return 
  //   modal.classList.add("active");
  //   overlay.classList.add("active");
  // } 
  
  
  // function closeModal(modal) { 
    //   if (modal == null) return 
    //   modal.classList.remove("active"); 
    //   overlay.classList.remove("active");
    // } 

    // let modal = document.getElementById("modal");
    
    // let addProjectButton = document.getElementById("add-project-btn"); 
    
    
    // let yourProjectsContainer = document.getElementById("navbar-your-projects-container");


    // let projectsContainer = document.getElementById("navbar-your-projects-container");

    // console.log(projectsContainer);


// console.log(addProjectButton); 

  //  let input = document.createElement("input");

  //  let btn = document.createElement("button");

  //  btn.textContent = "+";

  //  btn.style.fontSize = "1.5em";

 

  //  btn.style.height = "2.5em";

  //  btn.style.width = "2.5em";

  //  input.style.height = "2.2em";

  //  input.style.width = "18em";



  //  input.style.fontSize = "1.4rem";

  //  input.placeholder = "Name Your Project";














  // btn.textContent = "+";

  // btn.style.fontSize = "1.5em";

  // input.style.fontSize = "1.4rem";

  // input.placeholder = "Name Your Project"; 







  // add a class list and style in styles folder, 


// addProjectButton.addEventListener("click", () => { 
//   addProjectButton.style.display = "none";
//   // addProjectButton.visability = "none";

//   // hideAndShowDiv.style.display = "block";
//   projectsContainer.appendChild(input);
//   projectsContainer.appendChild(btn);
// })  
 
// when the user clicks out/focuses out on the input field, hide the input field, btn, and display the btn again? 

// input.addEventListener("focusout", () => { 
//   input.style.display = "none";
//   btn.style.display = "none"; 
//   // addProjectButton.style.display = "block";
//   // projectsContainer.appendChild(input);
//   // projectsContainer.appendChild(btn);
//   projectsContainer.appendChild(addProjectButton);
// })

// document.body.addEventListener("click", (e) => { 
//   if (e.target !== addProjectButton) {

//   }
// })

// document.body.append(input); 





// const modal = document.querySelector(".modal");

// const overlay = document.querySelector(".overlay"); 

// const addProjectButton = document.getElementById("add-project-btn");

// const closeModalBtn = document.querySelector(".btn-close");


// const openModal = function () {
//  modal.classList.remove("hidden");
//  overlay.classList.remove("hidden");
// }; 

// const closeModal = function () {
//   // modal.classList.add("hidden");
//   // overlay.classList.add("hidden");
//   modal.style.display = "none";
//   overlay.style.display = "none";
// }; 


// closeModalBtn.addEventListener("click", closeModal);

// addProjectButton.addEventListener("click", openModal); 























































































































































// call a function which handles DOM logic
// export then import within another file 

// import { some } from "lodash";
// // import { contentType } from "mime-types";
// import "./eventListenerModule"; 

// export function addProjectFormInput() { 

//   const inputField = document.createElement("input");

//   inputField.classList.add("input-field-text");

//   inputField.placeholder = "Name your project";

//   const btnContainer = document.createElement("container");

//   btnContainer.classList.add("btn-container");

//   const addBtn = document.createElement("button");

//   addBtn.textContent = "Add";

//   const cancelBtn = document.createElement("button");

//   cancelBtn.textContent = "Cancel";

//   addBtn.classList.add("add-btn");

//   cancelBtn.classList.add("cancel-btn");

//   const inputContainer = document.getElementById("input-field-container");

//   inputContainer.classList.add("project-input-field-container");

//   inputContainer.appendChild(inputField);

//   btnContainer.appendChild(addBtn);

//   btnContainer.appendChild(cancelBtn);

//   inputContainer.appendChild(btnContainer);

// } 


// export function appendProjectNameToDOM(value) { 

//   let userInputValue = value;  

//   let projectContainer = document.querySelector(".navbar-your-projects-container"); 

//   let mainContentProjectContainer = document.querySelector(".main-content-section-container"); 

//   console.log(mainContentProjectContainer.children);

//   let projectNameElementProjectSection = document.createElement("div"); 
//   // get the element and try to use it inside event listener module, 
//   projectNameElementProjectSection.classList.add("project-section-name-btn-div");

//   projectNameElementProjectSection.setAttribute("id", "project-element-from-navbar-section"); 

//   // console.log(projectNameElementProjectSection);

//   let projectNameElementMain = document.createElement("div"); 

//   projectNameElementMain.classList.add("main-content-section-project-name-div");

//   projectNameElementProjectSection.innerText = userInputValue;

//   projectNameElementProjectSection.addEventListener("click", function(e){ 

// // if (projectNameElementMain.includes(projectNameElementProjectSection)) { 
// //   console.log("true");
// // }

//     // projectNameElementProjectSection.disabled = true; 

//     console.log("Hey you clicked the project name");

//     projectNameElementMain.innerText = userInputValue;

//     mainContentProjectContainer.appendChild(projectNameElementMain); 

//     let addToDoBtn = document.createElement("button"); 

//     addToDoBtn.classList.add("create-to-do-form-btn");

    
//     // when btn is clicked it will generate a pop-up form 
//     // I think you need a container, a div that holds the content, append the div to the container, 
    
//     addToDoBtn.addEventListener("click", function(){  
      
//       // if (mainContentProjectContainer.includes(someBtn)) {
//       //   someBtn.disabled = true;
//       // }

    

//       // projectNameElementProjectSection.disabled = true; 

//       // someBtn.style.display = "none";

//       let contentContainer = document.createElement("container"); 

//       contentContainer.classList.add("todo-pop-up-container"); 

//       let titleOfToDoInputForm = document.createElement("p"); 

//       titleOfToDoInputForm.textContent = "Create Task" 

//       titleOfToDoInputForm.style.textDecoration = " underline";

//       let submitTaskBtn = document.createElement("button"); 

//       let submitTaskBtnContainer = document.createElement("div"); 

//       submitTaskBtnContainer.classList.add("submit-task-btn-container-styles");

//       submitTaskBtn.classList.add("submit-task-btn-pop-up-field");

//       submitTaskBtn.textContent = "Add To-Do"; 

//       // let input = document.createElement("input");

//       let popUpContent = document.createElement("div");

//       popUpContent.classList.add("pop-up-content");

//       let input = document.createElement("input");

//       input.classList.add("title-input-field-styles");

//       let inputLabel = document.createElement("label");

//       inputLabel.textContent = "Title"; 

//       let descriptionElement = document.createElement("textarea"); 

//       let descriptionElementLabel = document.createElement("label"); 

//       descriptionElementLabel.textContent = "Description";

//       let closeBtn = document.createElement("img"); 

//       closeBtn.classList.add("close-btn-to-do-input")

//       closeBtn.src = "../close-circle.png"; 

//       closeBtn.addEventListener("click", function(){
//         contentContainer.style.display = "none";
//       })

//       let urgencyLabel = document.createElement("label");

//       urgencyLabel.textContent = "Urgency";

//       let urgencyDropDown = document.createElement("select"); 

//       urgencyDropDown.textContent = "Urgency";

//       urgencyDropDown.classList.add("urgency-dropdown-styles");



//       let urgencyHigh = document.createElement("option"); 

//       urgencyHigh.textContent = "High" 

//       let urgencyMedium = document.createElement("option"); 

//       urgencyMedium.textContent = "Medium"; 

//       let urgencyLow = document.createElement("option"); 

//       urgencyLow.textContent = "Low"; 

//       let datePickerLabel = document.createElement("label");

//       datePickerLabel.textContent = "Due Date";

//       let datePicker = document.createElement("input"); 

//       datePicker.type = "date";

//       console.log(datePicker);
      
//       urgencyDropDown.appendChild(urgencyHigh);

//       urgencyDropDown.appendChild(urgencyMedium);

//       urgencyDropDown.appendChild(urgencyLow); 


//       submitTaskBtnContainer.appendChild(submitTaskBtn);

//       contentContainer.appendChild(closeBtn);

//       contentContainer.appendChild(titleOfToDoInputForm); 
      
//       contentContainer.appendChild(inputLabel);

//       contentContainer.appendChild(input); 

//       contentContainer.appendChild(descriptionElementLabel); 
      
//       contentContainer.appendChild(descriptionElement);

//       contentContainer.appendChild(urgencyLabel);

//       contentContainer.appendChild(urgencyDropDown); 

//       contentContainer.appendChild(datePickerLabel);

//       contentContainer.appendChild(datePicker);
      
//       contentContainer.appendChild(submitTaskBtnContainer); 

    

//       // should append elements to the content div, then append to container? 

//       mainContentProjectContainer.appendChild(contentContainer);
//     }) 

//     addToDoBtn.textContent = "+ Add ToDo";

//     mainContentProjectContainer.appendChild(addToDoBtn); 

//   }) 


// projectContainer.appendChild(projectNameElementProjectSection);



// } 




// function appendProjectToMain() { 
//   console.log("Hey I'm in here");
//     projectNameElementMain.innerText = userInputValue;
//     mainContentProjectContainer.appendChild(projectNameElementMain); 

//     let someBtn = document.createElement("button"); 

//     someBtn.textContent = "Add ToDo";

//     mainContentProjectContainer.appendChild(someBtn); 

// }



// I'm able to get the user value, I am able to log out it's value, I am able to grab the projects container section,

// it still returns and HTML element, I can turn it into an array, but I am unsure of how to append to the DOM. 


// what I want, the user will enter project name, I want that name to appear in the project's section and main content section(blue part); 

// Problem: I am confused on how to append this project name to the DOM. 

// What I've tried: Once the add btn is pressed, the value/name of project will be saved, and passed to a function which takes that 

// value and prints to the DOM. 

// I am able to access the project container, and the main section but it's an HTML collection, I can convert it into an array, 

// but how can I append an array to the DOM? 