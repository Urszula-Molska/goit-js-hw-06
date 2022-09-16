const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ListOfIngredients = document.querySelector("#ingredients");

const createListOfElement = (tableOfTextElements) => {
  tableOfTextElements.forEach((element) => {
    let newElement = document.createElement("li");
    newElement.textContent = element;
    ListOfIngredients.append(newElement);
    newElement.classList.add("item");
  });
};
createListOfElement(ingredients);
