// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItems(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </div>
     `
    }).join("");
};

    const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});
    imageContainer.addEventListener("click", gallery);
