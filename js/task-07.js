const fontSize = document.getElementById("font-size-control");
const textSize = document.getElementById("text");
let fontValue;
fontSize.addEventListener("input", ()=> {
    fontValue = fontSize.value;
    textSize.style.fontSize = `${fontValue}px`;
})

