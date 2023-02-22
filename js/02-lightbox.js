import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.innerHTML = galleryItems.reduce((calc, item) => calc + `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, "");

gallery.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") return
    else {
      var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
        scrollzoom: false,
      
         })
    lightbox.next();}
            
    }
)

console.log(galleryItems);
