import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.innerHTML = galleryItems.reduce((calc, item) => calc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`, "");



gallery.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") return
    else {const instance = basicLightbox.create (`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}">
`)
instance.show() }
            
    }
)


console.log(galleryItems);