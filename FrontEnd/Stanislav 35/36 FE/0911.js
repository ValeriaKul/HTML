// 1) Создать две кнопки - одна из них блокирует input с
// помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать -
// Какой-то текст! - input

// let input = document.querySelector('.input');
// let inputBlock = document.querySelector('.inputblock');
// let inputUnBlock = document.querySelector('.inputunblock');

// inputBlock.addEventListener('click', blockStatus);
// inputUnBlock.addEventListener('click', unblockStatus);

// function blockStatus(event) {
//   input.value = 'Текст заблокирован';
//   input.setAttribute('disabled', 'true');
// }

// function unblockStatus(event) {
//   input.value = 'Текст разблокирован';
//   input.removeAttribute('disabled');
// }

// 2) Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent
// Заголовок, не поменяется.
// Абзац, поменяется.
// Абзац, поменяется.
// Абзац, поменяется.

let changText = document.querySelectorAll('.changtext');
let changButton = document.querySelector('.changbutton');

// создаем массив, где будут находиться названия абзацев
const textContentarray = [];
// заполняем массив нужными данными с помощью цикла
for (let i = 0; i < 5; i++) {
    textContentarray.push(`Абзац ${i+1}`);  
    // передаем каждому элементу с классом "changtext" текст из сформированного ранее массива
    changText[i].innerText = `${textContentarray[i]}`;
}
// устанавливаем флаг
let flag = true;
changButton.addEventListener('click', change);

function change() {
  if (flag == true) { // если флаг true - меняем весь текст на индексы
     for (let i = 0; i < changText.length; i++) {
        changText[i].textContent = i + 1;
        }
    flag = false; // после этого меняем флаг на false
  } else { // если флаг false - меняем обратно индексы на текст
    for (let i = 0; i < changText.length; i++) {
      changText[i].textContent = textContentarray[i];
    }
     flag = true; // после этого меняем флаг на true
  }
  return flag; // возвращаем флаг
}
