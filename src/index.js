// import './js/post';
// import './js/async-post';
import './js/fetch-pic';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getPhoto from './js/fetch-pic';

getPhoto('cat').then(console.log);

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
