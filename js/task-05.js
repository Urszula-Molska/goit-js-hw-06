const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  }
  if ((event.currentTarget.value = " ")) {
    output.textContent = "Nic nie wpisano";
  } else {
    output.textContent = "Anonymous";
  }
});
