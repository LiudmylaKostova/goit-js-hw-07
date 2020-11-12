//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}


const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}


decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);

