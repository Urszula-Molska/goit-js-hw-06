const decrementBtn = document.querySelector(
  '.editor button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '.editor button[data-action="increment"]'
);

const counter = document.querySelector("#value");

decrementBtn.addEventListener("click", Minus);
incrementBtn.addEventListener("click", Plus);

let counterValue = 0;
const Minus = (event) => {
  return (counterValue -= 1);
};

const Plus = (event) => {
  return (counterValue += 1);
};

counter.innerHTML = counterValue;
