const fontSizeControl = document.getElementById("font-size-control");
const span = document.getElementById("text");
fontSizeControl.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  const evCurTar = event.currentTarget.value.toString();
  span.style.fontSize = `${evCurTar}px`;
});
