// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createMarkUp(galleryItems);

const imageRefs = document.querySelectorAll('.gallery__item');

const gallerySimple = new SimpleLightbox(imageRefs, {
  captionsData: 'alt',
  captionDelay: 250,
});

function createMarkUp(data) {
  return data
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy"/>
</a>`;
    })
    .join('');
}
