const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41971380-5e7df6cf95dc1cfc66e370c4e';

export function searchPicturesByParams(picture) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: picture,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
