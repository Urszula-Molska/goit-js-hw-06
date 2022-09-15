//Zlicza liczbę wszystkich kategorii

const numberOfCategories = Array.from(
  document.querySelectorAll(".item")
).length;
const message = `Number of categories: ${numberOfCategories}`;
console.log(message);

//Pokazuje liczbę elementów w kategoriach

const categories = document.querySelectorAll("h2");
const itemElements = document.querySelectorAll(".item");

const categoryList = () => {
  [...itemElements].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.innerText}`);

    let listOfLi = [...item.querySelectorAll("li")];
    console.log(`Elements: ${listOfLi.length}`);
  });
};

categoryList();


/** 
const categories = [...document.querySelectorAll("h2")];
const itemElements = [...document.querySelectorAll(".item")];
const nameOfCategories = [...itemElements.firstElementChild];

const categoryList = () => {
  categories.forEach((item) => {
    console.log(`Category: ${item.innerText}`);
  });

  itemElements.forEach((item) => {
    let listOfLi = [...item.querySelectorAll("li")];
    console.log(`Elements: ${listOfLi.length}`);
  });
};

categoryList();

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
//numberOfCategories()
