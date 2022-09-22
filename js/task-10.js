const input = document.querySelector("input");
const boxes = document.getElementById("boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonRemove = document.querySelector("button[data-destroy]");
let amount = 0;
console.log(input);

input.addEventListener("input", (event) => {
  amount = parseInt(event.currentTarget.value);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newHeight = 30 + 10 * i;
    const newWidth = 30 + 10 * i;
    const randomColor = getRandomHexColor();
    const newDiv = `<div class="box" style="height:${newHeight}px;width:${newWidth}px;background-color:${randomColor}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

buttonCreate.addEventListener("click", () => {
  createBoxes(amount);
});

buttonRemove.addEventListener("click", destroyBoxes);
