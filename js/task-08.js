/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
 и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция 
 элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div,
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const inputRef = document.querySelector('#controls > input');
// const inputRef = document.querySelector('[type="number"]');
const btnRenderRef = document.querySelector('[data-action = "render"]');
const btnDestroyRef = document.querySelector('[data-action = "destroy"]');
const divRef = document.querySelector('#boxes');

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i += 1) {
    let element = document.createElement('div');
    element.classList.add('box');
    divRef.append(element);
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255,
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255,
    )})`;
  }
};

btnRenderRef.addEventListener('click', () => createBoxes(inputRef.value));

const destroyBoxes = function () {
  inputRef.value = '';
  divRef.innerHTML = '';
  // let element = document.querySelectorAll('.box');
  // element.forEach(el => el.remove());
};

btnDestroyRef.addEventListener('click', destroyBoxes);
