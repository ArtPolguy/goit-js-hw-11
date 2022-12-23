import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

  const response = await photoApiService.getPhoto();
  const photosArr = response.hits;

  if (photoApiService.request === '' || !photosArr.length) {
    Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  clearRender();
  renderGalleryMarkup(photosArr);

  refs.loadMoreBtn.classList.remove('is-hidden');
}

async function handleLoadMoreBtnClick() {
  const response = await photoApiService.getPhoto();
  const photosArr = response.hits;
  const totalPages = response.totalHits / photoApiService.perPage;

  if (totalPages <= photoApiService.page) {
    refs.loadMoreBtn.classList.add('is-hidden');
    Notify.info("We're sorry, but you've reached the end of search results.");

    return;
  }
  renderGalleryMarkup(photosArr);
}

function clearRender() {
  refs.gallery.innerHTML = '';
}
