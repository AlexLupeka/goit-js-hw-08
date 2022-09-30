import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(elem => {
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = elem.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = elem.preview;
  galleryImage.setAttribute('title', elem.description);
  galleryImage.alt = elem.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});

gallery.append(...items);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
