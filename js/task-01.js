//const numberOfCategories = document.querySelector(".item").length;
//console.log(numberOfCategories);

const categories = document.querySelectorAll(".item");

const numberOfCategories = () => {
  let sum = 0;
  categories.forEach((item) => (sum = sum + 1));
  return sum;
};

console.log(numberOfCategories);
