import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchPicturesByParams } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { refs } from './js/render-functions';

const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  loader.style.display = 'inline-block';
  const form = event.currentTarget;
  const picture = form.elements.picture.value;

  searchPicturesByParams(picture)
    .then(data => {
      const pictures = data.hits;

      if (pictures.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      createMarkup(pictures);
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        position: 'topRight',
        message: 'Failed to fetch images. Please try again later.',
      });
    })
    .finally(() => {
      form.reset();
      loader.style.display = 'none';
    });
}
