const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
//let newTable = [];

//const convertToTable = (elements) => {
// for (const el of elements) {
//  newTable.push.el;
//}
// return newTable;
//};

//convertToTable(images);

const createOfGallery = (pictures) => {
  //pictures.forEach((element) =>
  for (const picture of pictures) {
    const newLiTag = document.createElement("li");
    const newImgTag = document.createElement("img");
    gallery.append(newLiTag);
    newLiTag.append(newImgTag);
    newImgTag.insertAdjacentHTML("afterbegin", picture);
  }
};

createOfGallery(omages);
