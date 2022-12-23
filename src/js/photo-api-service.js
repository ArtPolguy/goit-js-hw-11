import axios from 'axios';
const API_KEY = '32107101-e2562fd64436d208435f63a52';
const URL = `https://pixabay.com/api/`;

export default class PhotoApiService {
  constructor() {
    this.userRequest = '';
    this.page = 1;
    this.perPage = 40;
  }

  async getPhoto() {
    const { data } = await axios.get(
      `${URL}?key=${API_KEY}&q=${this.userRequest}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
    );

    this.incrementPage();

    return data;
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
