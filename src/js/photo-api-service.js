const API_KEY = '32107101-e2562fd64436d208435f63a52';
const URL = `https://pixabay.com/api/`;

export default class PhotoApiService {
  constructor() {
    this.userRequest = '';
    this.page = 1;
  }

  async getPhoto() {
    console.log(this);
    const response = await fetch(
      `${URL}?key=${API_KEY}&q=${this.userRequest}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
    );
    const photos = await response.json();

    this.incrementPage();

    return photos.hits;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get request() {
    return this.userRequest;
  }

  set request(newRequest) {
    this.userRequest = newRequest;
  }
}
