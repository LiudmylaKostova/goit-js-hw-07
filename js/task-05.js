/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его
текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.*/

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

// inputRef.addEventListener('input', e => {
//   spanRef.textContent = e.target.value;
//   // console.log(e.target.value);
//   if (spanRef.textContent === '') {
//     spanRef.textContent = 'незнакомец';
//   }
// });

//2 variant (при нажатии клавиши enter)

inputRef.addEventListener('change', event => {
  let name = event.target.value;
  name
    ? (spanRef.textContent = event.target.value)
    : (spanRef.textContent = 'незнакомец');
});
