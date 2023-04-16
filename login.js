// Used input event listener instead of change
idInput.addEventListener("input", (e) => {
    if(isNaN(e.target.value) === false){
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






