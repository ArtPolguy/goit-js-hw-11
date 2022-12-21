import { refs } from './reference';

export function renderGalleryMarkup(photos) {
  const markup = photos
    .map(photo => {
      return `
  <div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy"  width = 400px/>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${photo.downloads}</b>
    </p>
  </div>
</div>`;
    })
    .join();
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
