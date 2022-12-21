// import axios from 'axios';
// const API_KEY = '32107101-e2562fd64436d208435f63a52';
// const URL = `https://pixabay.com/api/`;

// export async function getPhoto(userRequest) {
//   const response = await fetch(
//     `${URL}?key=${API_KEY}&q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
//   );
//   const photos = await response.json();
//   return photos;
// }

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.

// &q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true
