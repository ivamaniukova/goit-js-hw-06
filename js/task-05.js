const user = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");
user.addEventListener("input", (setOutput) => {
    if (setOutput.target.value === "") {
    textOutput.textContent = "Anonymous";
    
} else {
    textOutput.textContent = setOutput.target.value;
    }
});