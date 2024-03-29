/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится
'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
(тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится: 

Категория: Животные
Количество элементов: 4 */

const itemRefs = document.querySelectorAll('.item');
console.log(`В списке ${itemRefs.length} категории`);

// 1 variant

// const titleRef = itemRefs.forEach(item =>
//   console.log(
//     `Категория: ${item.children[0].textContent} \n Количество элементов: ${item.children[1].children.length}`,
//   ),
// );

// 2 variant

// const titleRef = itemRefs.forEach(item =>
//   console.log(
//     `Категория: ${item.children[0].textContent}, количество элементов: ${
//       item.querySelector('Ul').children.length
//     }`,
//   ),
// );

// 3 variant

const titleRef = itemRefs.forEach(item =>
  console.log(
    `Категория: ${item.firstElementChild.textContent}, количество элементов: ${item.lastElementChild.children.length}`,
  ),
);
