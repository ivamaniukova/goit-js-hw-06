const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", () => {
    if (textInput.value.trim().length === 6) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
        
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
}
  
)