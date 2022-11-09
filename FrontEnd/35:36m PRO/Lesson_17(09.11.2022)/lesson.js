// Кнопка при нажатии на которую в инпуте меняется текст.

// Нажми на кнопку рядом
// Нажал! Спасибо.

// <button onclick="buttonClick()">Нажми на меня</button>
// <input type="text" id="input" value="Нажми на меня">

// <button>Нажми на меня</button>
// <input type="text" id="input" value="Нажми на кнопку рядом">

/* let myButton = document.querySelector(".myButton");
let inputElem = document.querySelector("#input");

myButton.addEventListener("click", changeTextInput);

function changeTextInput(event) {
  inputElem.value = "Спасибо, что нажали!";
  myButton.removeEventListener("click", changeTextInput);
} */

// 3) Вывод содержимого инпута
// Создайте input и две кнопки.
// В инпут вводите текст, потом нажимайте на первую кнопку
// и во вторую передавайте из содержимое input

let actionButton = document.querySelector(".myButton-1");
let inputElem = document.querySelector("#input");
let secondButton = document.querySelector(".myButton-2");

actionButton.addEventListener("click", transferText);

function transferText(event) {
    if (!inputElem.value) {
        secondButton.textContent = 'Fill input!';
    }
  secondButton.textContent = inputElem.value;
  inputElem.value = " ";
}

// 4) Создайте input и кнопку "возвести в квадрат"
// в input вводите число, а по нажатию на кнопку меняйте его на квадрат этого числа
// реализуйте это через вспомогательную функцию возведения в квадрат
// Number(input.value) и square(название для функции квадрат)

let inputElem2 = document.querySelector('#input2');
let thirdButton = document.querySelector(".myButton-3");

let getSquare = num => num * num;

thirdButton.addEventListener('click', toSquare);

function toSquare(event) {
    let number = Number(inputElem2.value);
    if(isNaN(number)) {
        inputElem2.value = 'Is not a number!';
    } else {
        inputElem2.value = getSquare(number);
    }
}

// 5) По нажатию на кнопку меняется ее текст и цвет текста
// в зависимости от того на какую кнопку нажали
// красный бордер и текст и зеленый бордер и текст

let greenButton = document.querySelector('.greenButton');
let redButton = document.querySelector('.redButton');
let blockField = document.querySelector('.buttonblock');

greenButton.addEventListener('click', changeToGreen);
redButton.addEventListener('click', changeToRed);

function changeToGreen (event) {
    blockField.className = 'buttonblock greenStyle';
}

function changeToRed (event) {
    blockField.className = 'buttonblock redStyle';
}



