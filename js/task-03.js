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

const createOfGallery = (pictures) => {
  //const entries = Object.entries(pictures);
  //pictures.forEach((element) =>
  for (const picture of pictures) {
    const newLiTag = document.createElement("li");
    gallery.append(newLiTag);
    const afterLiTag = `<img class="image" src="${picture.url}",alt="${picture.alt}"/>`;
    const toHtml = newLiTag.insertAdjacentHTML("afterbegin", afterLiTag);
    // const pict = Object.values(picture);
    //newImgTag.insertAdjacentHTML("afterbegin", pict);
  }
};
createOfGallery(images);

//const entries = Object.entries(images);
//console.log(entries);
