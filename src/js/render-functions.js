export function createMarkup(hits, resultContainer) {
  const markUp = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
              <a href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="370" height="300"></a>
    <div class="stats-block">
           <div class="stats">  
               <h2 class="title">Likes</h2>
               <p class="amount">${likes}</p>
           </div>
           <div class="stats">  
               <h2 class="title">Views</h2>
               <p class="amount">${views}</p>
           </div>
            <div class="stats"> 
                <h2 class="title">Comments</h2>
               <p class="amount">${comments}</p>
           </div>
            <div class="stats">  
               <h2 class="title">Downloads</h2>
               <p class="amount">${downloads}</p>
            </div>                
     </div>
  </li>`
    )
    .join('');

  resultContainer.insertAdjacentHTML('beforeend', markUp);
}
