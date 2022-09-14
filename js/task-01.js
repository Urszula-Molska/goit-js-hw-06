//Zlicza liczbę wszystkich kategorii

const numberOfCategories = Array.from(
  document.querySelectorAll(".item")
).length;
const message = `Number of categories: ${numberOfCategories}`;
console.log(message);
//

const categories = document.querySelectorAll("h2");

const categoryList = () => {
  let sum = 0;
  categories.forEach((item) => console.log(`Category: ${item}`));
};

//console.log(`Elements: ${}`)

// console.log(`Number of categories: ${sum}`);
//};
//numberOfCategories();

//const categories = document.querySelectorAll(".item");

//const numberOfCategories = () => {
// let sum = 0;
//categories.forEach((item) => (sum = sum + 1));
// console.log(`Number of categories: ${sum}`);
//};
//numberOfCategories();
