const textInput = document.querySelector("#validation-input");
const dataLengthAtribute = textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length.toString() === dataLengthAtribute) {
    console.log(event.currentTarget.value.length);
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
