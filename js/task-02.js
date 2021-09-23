/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит
все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// 1 variant

// const ulRef = document.querySelector("ul");
//  const ulRefArray = ingredients.map((ingredient) => {
//   const liRef = document.createElement("li");
//    liRef.textContent = ingredient;
//    return liRef;
//     });

// ulRef.append(...ulRefArray);
// console.log(ulRef);

// 2 variant

const ulRef = document.querySelector('ul');

for (let i = 0; i < ingredients.length; i += 1) {
  const liRef = document.createElement('li');
  liRef.textContent = ingredients[i];
  ulRef.append(liRef);
  console.log(liRef);
}
