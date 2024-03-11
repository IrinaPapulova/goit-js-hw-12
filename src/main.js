import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchPicturesByParams } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const hiddenClass = 'is-hidden';
const formToSearch = document.getElementById('search-form');
const resultContainer = document.getElementById('result-container');
const loadMoreBtn = document.querySelector('.load-btn');
const preloader = document.querySelector('.loader');
let pictureQuery = '';
let page = 0;
let per_page = 0;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formToSearch.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  page = 1;
  per_page = 15;
  const form = event.currentTarget;
  pictureQuery = form.elements.picture.value.trim();

  resultContainer.innerHTML = '';

  if (!pictureQuery) {
    iziToast.error({
      position: 'topRight',
      message: 'Please, fill in the search field',
    });
    return;
  }

  try {
    const data = await searchPicturesByParams(pictureQuery, page, per_page);
    preloader.classList.remove(hiddenClass);
    handleLoadMore();

    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      preloader.classList.add(hiddenClass);
      form.reset();
      return;
    } else {
      showLoadMoreBtn();
      preloader.classList.add(hiddenClass);

      createMarkup(data.hits, resultContainer);
      lightbox.refresh();
    }
    if (data.hits.length > 15) {
      showLoadMoreBtn();
    }
    scrollBy();
    form.reset();
  } catch (err) {
    console.log(err);
  }
}

async function handleLoadMore() {
  page += 1;

  preloader.classList.remove(hiddenClass);
  hideLoadMoreBtn();
  try {
    const data = await searchPicturesByParams(pictureQuery, page, per_page);
    const totalPage = Math.ceil(data.totalHits / per_page);

    if (page <= totalPage) {
      preloader.classList.add(hiddenClass);
      createMarkup(data.hits, resultContainer);
      lightbox.refresh();
      showLoadMoreBtn();
      scrollBy();
    } else {
      preloader.classList.add(hiddenClass);
      hideLoadMoreBtn();
      iziToast.info({
        position: 'bottomCenter',
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

function scrollBy() {
  window.scrollBy({
    top: 640,
    behavior: 'smooth',
  });
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove(hiddenClass);
  loadMoreBtn.addEventListener('click', handleLoadMore);
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add(hiddenClass);
  loadMoreBtn.removeEventListener('click', handleLoadMore);
}
