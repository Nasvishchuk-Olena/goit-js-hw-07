import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.innerHTML = galleryItems.reduce((calc, item) => calc + `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, "");

gallery.addEventListener('keypress', event => { 
  if (event.code === "Esc") {
    gallery.removeEventListener,
  instance.close()}
})
      const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
        scrollzoom: false,
      
         })
