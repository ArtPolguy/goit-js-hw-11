// import './js/post';
// import './js/async-post';
import './js/fetch-pic';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getPhoto } from './js/fetch-pic';
import { renderGalleryMarkup } from './js/render-markup';
import { refs } from './js/reference';
import PhotoApiService from './js/photo-api-service';

refs.searchForm.addEventListener('submit', handleSearchBtnSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);
refs.loadMoreBtn.classList.add('is-hidden');

const photoApiService = new PhotoApiService();

async function handleSearchBtnSubmit(e) {
  e.preventDefault();

  photoApiService.request = e.currentTarget.elements.searchQuery.value;

  photoApiService.resetPage();

  if (photoApiService.request === '') {
    Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  const response = await photoApiService.getPhoto();

  refs.loadMoreBtn.classList.remove('is-hidden');

  clearRender();
  renderGalleryMarkup(response);
}
async function handleLoadMoreBtnClick() {
  const response = await photoApiService.getPhoto();
  renderGalleryMarkup(response);
}

function clearRender() {
  refs.gallery.innerHTML = '';
}

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
