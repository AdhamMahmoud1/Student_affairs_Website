// regex function
function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}
// validating input 
const idInputContainer = document.querySelector(".id-input")
const passwordContainer = document.querySelector(".password-input")
const idInput = document.querySelector(".id-input input")
const passwordInput = document.querySelector(".password-input input")


let idWarningMsg = document.createElement("span")
idWarningMsg.textContent = "* Username Must only contain alphabets"
idWarningMsg.classList.add("warning");


// Dropdown list on mouse click functionality
const studentsInfoLink = document.querySelector(".dropdown-list a")
const dropdownMenu = document.querySelector(".dropdown-container")


studentsInfoLink.addEventListener("click", ()=> {
  dropdownMenu.classList.toggle("viewed")

  console.log("clicked")
})


// Used input event listener instead of change
idInput.addEventListener("input", (e) => {
    if(onlyLettersAndSpaces(e.target.value) === true){
        idInput.classList.remove("wrong-input")
        idInputContainer.removeChild(idWarningMsg)
    }else{
        idInput.classList.add("wrong-input")
        idInputContainer.appendChild(idWarningMsg)
    }
})

let passwordWarningMsg = document.createElement("span")
passwordWarningMsg.textContent = "* password must be more than 8 characters"
passwordWarningMsg.classList.add("warning")
passwordInput.addEventListener("input", (e) => {
    if(e.target.value.length > 8){
        passwordInput.classList.remove("wrong-input")
        passwordContainer.removeChild(passwordWarningMsg)
    }else{
        passwordInput.classList.add("wrong-input")
        console.log("added")
        passwordContainer.appendChild(passwordWarningMsg)
    }
})














