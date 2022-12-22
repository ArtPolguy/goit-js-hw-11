import { refs } from './reference';

export function renderGalleryMarkup(photos) {
  const markup = photos
    .map(photo => {
      return `
  <div class="photo-card">
  <img
    src="${photo.webformatURL}"
    alt="${photo.tags}"
    loading="lazy"
    width="400px"
    class="phoro-card_img"
  />
  <div class="info">
    <p class="info-item">
      <b class = "info-item_name">Likes:</b>
      <span> ${photo.likes} </span>
    </p>
    <p class="info-item">
      <b class = "info-item_name">Views:</b>
      <span>${photo.views}</span>
    </p>
    <p class="info-item">
      <b class = "info-item_name">Comments:</b>
      <span> ${photo.comments}</span>
    </p>
    <p class="info-item">
      <b class = "info-item_name">Downloads:</b>
      <span>${photo.downloads}</span>
    </p>
  </div>
</div>`;
    })
    .join();
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
