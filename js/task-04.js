const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector("#value");
let counterValue = 0;

function Minus(event) {
  counterValue -= 1;
  return counter.innerHTML = counterValue;

function Plus(event) {
  counterValue += 1;
  return counter.innerHTML = counterValue;
}

decrementBtn.addEventListener("click", Minus);
incrementBtn.addEventListener("click", Plus);
