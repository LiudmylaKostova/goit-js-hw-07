//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute('data-length');

console.log(inputLength);

inputRef.addEventListener('change', (event) => {
    console.log(event.target.value.length);
     	if (event.target.value.length >= inputLength) {
              inputRef.classList.add('valid');
              inputRef.classList.remove('invalid');
              console.log('cool');
    } else {
              inputRef.classList.add('invalid');
              inputRef.classList.remove('valid');
              console.log('not correct!');
};
});