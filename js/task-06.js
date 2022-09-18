const textInput = document.querySelector("input");
const dataLengthAtribute = document.querySelector('input[data-lenght ="6"]');
textInput.addEventListener("blur", () => {
  if ((textInput.value.length = dataLengthAtribute)) {
    textInput.style.#validation - input.valid;
  } else {
    textInput.style.#validation - input.invalid;
  }
});
