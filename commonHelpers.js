import{S,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const E="https://pixabay.com/api/",$="41971380-5e7df6cf95dc1cfc66e370c4e";function L(r,t=1,o){return axios.get(`${E}`,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:t}}).then(({data:i})=>i)}function v(r,t){const o=r.map(({webformatURL:i,largeImageURL:e,tags:s,likes:c,views:P,comments:B,downloads:M})=>`<li class="gallery-item">
              <a href="${e}">
    <img class="gallery-image" src="${i}" alt="${s}" width="370" height="300"></a>
    <div class="stats-block">
           <div class="stats">  
               <h2 class="title">Likes</h2>
               <p class="amount">${c}</p>
           </div>
           <div class="stats">  
               <h2 class="title">Views</h2>
               <p class="amount">${P}</p>
           </div>
            <div class="stats"> 
                <h2 class="title">Comments</h2>
               <p class="amount">${B}</p>
           </div>
            <div class="stats">  
               <h2 class="title">Downloads</h2>
               <p class="amount">${M}</p>
            </div>                
     </div>
  </li>`).join("");t.insertAdjacentHTML("beforeend",o)}const a="is-hidden",O=document.getElementById("search-form"),m=document.getElementById("result-container"),u=document.querySelector(".load-btn"),n=document.querySelector(".loader");let d="",l=0,h=0,b=new S(".gallery a",{captionsData:"alt",captionDelay:250});O.addEventListener("submit",q);async function q(r){r.preventDefault(),l=1,h=15;const t=r.currentTarget;if(d=t.elements.picture.value.trim(),m.innerHTML="",!d){f.error({position:"topRight",message:"Please, fill in the search field"});return}try{const o=await L(d,l,h);if(n.classList.remove(a),g(),o.hits.length===0){f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.add(a),t.reset();return}else p(),n.classList.add(a),v(o.hits,m),b.refresh();o.hits.length>15&&p(),w(),t.reset()}catch(o){console.log(o)}}async function g(){l+=1,n.classList.remove(a),y();try{const r=await L(d,l,h),t=Math.ceil(r.totalHits/h);if(l<=t)n.classList.add(a),v(r.hits,m),b.refresh(),p(),w();else{n.classList.add(a),y(),f.info({position:"bottomCenter",message:"We're sorry, but you've reached the end of search results."});return}}catch(r){console.log(r)}}function w(){window.scrollBy({top:640,behavior:"smooth"})}function p(){u.classList.remove(a),u.addEventListener("click",g)}function y(){u.classList.add(a),u.removeEventListener("click",g)}
//# sourceMappingURL=commonHelpers.js.map
