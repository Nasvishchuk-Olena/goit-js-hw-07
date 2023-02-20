import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.innerHTML = galleryItems.reduce((calc, item) => calc + `<img src=${item.preview} alt =${item.description} />`, "");



gallery.addEventListener('click', (event) => {
    if (event.target.nodeName !== "IMG") return
    else {
        galleryItems.map(item => {
            const instance = basicLightbox.create(`
    <img src="${item.original}" width="800" height="600">
`)
            instance.show()
            
        })
        //   { instance.close()}
    }
})


console.log(galleryItems);