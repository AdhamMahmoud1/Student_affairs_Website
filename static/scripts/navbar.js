// hamburger icon functionality for responsive navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Dropdown list on mouse click functionality
const studentsInfoLink = document.querySelector(".dropdown-list a")
const dropdownMenu = document.querySelector(".dropdown-container")


studentsInfoLink.addEventListener("click", ()=> {
  dropdownMenu.classList.toggle("viewed")

  console.log("clicked")
})



