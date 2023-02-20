import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.innerHTML = galleryItems.reduce((calc, item) => calc + `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, "");




console.log(galleryItems);
