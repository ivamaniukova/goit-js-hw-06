const decrease = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');
const value = document.querySelector(`#value`);

let counterValue = 0;
decrease.addEventListener("click", () => {
counterValue -= 1 ;
value.textContent = counterValue;
})
increase.addEventListener("click", () =>{
    counterValue += 1;
    value.textContent = counterValue;
})