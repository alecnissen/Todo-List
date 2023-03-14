document.getElementById("add-project-btn").addEventListener("click", function(){
    // added listener to button, when clicked, add an input field above the element 
    let inputField = document.createElement('input'); 

    // let navbarProjectsContainer = document.getElementsByClassName('navbar-your-projects-container')[0];

    // let navbar = document.querySelector('nav'); 

    let inputContainer = document.getElementById('input-field-container');

    inputContainer.style.display = 'flex'; 

    inputContainer.style.flexDirection = 'column';

    inputContainer.style.alignItems = 'center';

    inputContainer.style.justifyContent = 'center';

    inputContainer.style.gap = '0.5em';

    inputContainer.appendChild(inputField);
}) 