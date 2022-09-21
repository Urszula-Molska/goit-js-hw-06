function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonRemove = document.querySelector("button[data-destroy]");

input.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
});

function createBoxes(amount) {
  for (let i = 0; (i = amount); i += 1) {
    const newHeight = 30 + 10 * i;
    const newWidth = 30 + 10 * i;
    const newDiv = `<div class="box">height="${newHeight}px",width="${newWidth}px"</div>`;
    const toHtml = boxes.insertAdjacentHTML("afterbegin", newDiv);
    //= getRandomHexColor();
  }
}

buttonCreate.addEventListener("click", createBoxes(amount));
buttonRemove.removeEventListener("click", createBoxes(amount));
