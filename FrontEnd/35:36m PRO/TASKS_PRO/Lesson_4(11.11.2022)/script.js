/*
    1. Ищем каждую кнопку по ее id
    2. На каждую вешаем слушатель события - клика
    3. В обработчике события создаем действие, которое позволит изменить цвет
*/

/* let redBtn = document.querySelector('#red');
let greenBtn = document.querySelector('#green');
let blueBtn = document.querySelector('#blue');
let imgBtn = document.querySelector('#img');
*/

let buttons = document.querySelectorAll(".item");
console.log(buttons);
let buttonsArray = Array.from(buttons);
console.log(buttonsArray);

// buttonsArray.map((button) => {
//   button.addEventListener("click", () => {
//     document.body.style.background = `${button.getAttribute("id")}`;
//   });
// });

function getRandomColor () {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}

for (const elem of buttons) {
    elem.addEventListener("click", () => {
        if(elem.getAttribute("id") !== "random") {
        document.body.style.background = `${elem.getAttribute("id")}`;
        } else {
        document.body.style.background = `${getRandomColor()}`;}
        
      });
}