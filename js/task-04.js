const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector("#value");
let counterValue = 0;

function Minus(event) {
  return (counterValue -= 1);
}

function Plus(event) {
  return (counterValue += 1);
}

counter.innerHTML = counterValue;

decrementBtn.addEventListener("click", Minus);
incrementBtn.addEventListener("click", Plus);
