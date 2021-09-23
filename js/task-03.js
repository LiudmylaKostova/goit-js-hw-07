/* Напиши скрипт для создания галлереи изображений по массиву данных.
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй 
шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1 variant

// const ulRef = document.querySelector('#gallery');

// images.forEach(el =>
//   ulRef.insertAdjacentHTML(
//     'beforeend',
//     `<li class='item'>
// <img class='item_img' src = "${el.url}" alt = "${el.alt}">
//  </li>`,
//   ),
// );
// console.log(ulRef);

// const ulRef = document.querySelector('#gallery');

// ======================================================

// 2 variant (с инлайн стилями)

// const ulRef = document.querySelector('#gallery');
// ulRef.style.display = 'flex';
// ulRef.style.listStyle = 'none';

// const galleryImages = images.map(image => {
//   let li = document.createElement('li');
//   li.style.marginLeft = '20px';

//   let img = document.createElement('img');
//   img.style.width = '100%';
//   img.style.height = '220px';

//   li.appendChild(img);
//   img.setAttribute('src', `${image.url}`);
//   img.setAttribute('alt', image.alt);

//   return li;
// });

// ulRef.append(...galleryImages);

// =====================================================

// 3 variant

// const ulRef = document.querySelector('#gallery');

// const galleryImages = images.map(image => {
//   return `<li class="item"><img src=${image.url} alt=${image.alt} width = "100%" height = "220px"></li>`;
// });

// ulRef.insertAdjacentHTML('beforeend', galleryImages.join(' '));

// =====================================================

// 4 variant

const ulRef = document.querySelector('#gallery');

let result = images.reduce((acc, elem) => {
  return (acc += `<li class = 'item'>
  <img class = 'item_img' src = "${elem.url}" alt = "${elem.alt}">
          </li > `);
}, '');
ulRef.insertAdjacentHTML('beforeend', result);
