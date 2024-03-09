import{S as m,i as n}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="41971380-5e7df6cf95dc1cfc66e370c4e";function h(a){const s=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const l={form:document.getElementById("search-form"),resultContainer:document.getElementById("result-container")};function g(a){const s=a.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>`<li class="gallery-item">
              <a href="${o}">
    <img class="gallery-image" src="${r}" alt="${e}" width="370" heigth="300"></a>
    <div class="stats-block">
           <div class="stats">  
               <h2 class="title">Likes</h2>
               <p class="amount">${t}</p>
           </div>
           <div class="stats">  
               <h2 class="title">Views</h2>
               <p class="amount">${i}</p>
           </div>
            <div class="stats"> 
                <h2 class="title">Comments</h2>
               <p class="amount">${u}</p>
           </div>
            <div class="stats">  
               <h2 class="title">Downloads</h2>
               <p class="amount">${d}</p>
            </div>
                
     </div>
  </li>`).join("");return l.resultContainer.innerHTML=s,s}const c=document.querySelector(".loader");let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});l.form.addEventListener("submit",v);function v(a){a.preventDefault(),c.style.display="inline-block";const s=a.currentTarget,r=s.elements.picture.value;h(r).then(o=>{const e=o.hits;e.length===0&&n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g(e),y.refresh()}).catch(o=>{console.log(o),n.error({position:"topRight",message:"Failed to fetch images. Please try again later."})}).finally(()=>{s.reset(),c.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
