// hamburger icon functionality for responsive navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// validating input 
const idInputContainer = document.querySelector(".id-input")
const passwordContainer = document.querySelector(".password-input")
const idInput = document.querySelector(".id-input input")
const passwordInput = document.querySelector(".password-input input")


let idWarningMsg = document.createElement("span")
idWarningMsg.textContent = "* ID Must only contain numbers"
idWarningMsg.classList.add("warning");


// Dropdown list on mouse click functionality
const studentsInfoLink = document.querySelector(".dropdown-list a")
const dropdownMenu = document.querySelector(".dropdown-container")


studentsInfoLink.addEventListener("click", ()=> {
  dropdownMenu.classList.toggle("viewed")

  console.log("clicked")
})