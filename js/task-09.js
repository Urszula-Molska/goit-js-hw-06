function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');
button.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
});
