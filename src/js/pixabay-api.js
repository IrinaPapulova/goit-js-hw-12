//import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41971380-5e7df6cf95dc1cfc66e370c4e';

function searchPicturesByParams(picture, page = 1, per_page) {
  return axios
    .get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: picture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page,
        page,
      },
    })
    .then(({ data }) => data);
}

export { searchPicturesByParams };
