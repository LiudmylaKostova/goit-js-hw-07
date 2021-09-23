/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

// 1 variant

// let counterValue = 0;

// const increment = () => {
//     counterValue += 1;
//     valueRef.textContent = counterValue;
// }

// const decrement = () => {
//     counterValue -= 1;
//     valueRef.textContent = counterValue;
// }

// decrementRef.addEventListener("click", decrement);
// incrementRef.addEventListener("click", increment);

// 2 variant

const changeValue = event => {
  if (event.target.getAttribute('data-action') === 'decrement') {
    valueRef.textContent--;
  } else {
    valueRef.textContent++;
  }
};
incrementRef.addEventListener('click', changeValue);
decrementRef.addEventListener('click', changeValue);
