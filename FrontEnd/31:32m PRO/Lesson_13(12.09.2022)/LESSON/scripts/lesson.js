
// const main_p = document.querySelector('.main'); //присваиваем параграф с классом мэйн в переменную
// console.log(main_p); //выводим на консоль переменную
// const p_list = document.querySelectorAll('p'); //сформировали лист из параграфов

// const mainP = document.getElementsByClassName('main')[0]; 


//============================================================

// const prod_p = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0]; - старый способ
// const prod_p = document.querySelector('.products p'); // новый способ

// prod_p.addEventListener('click', () => {
//     prod_p.innerText = 'Товары'; // изменение текста во время клика
// });

//========================TASK_2=====================================

// 1. Найти параграф с текстом "Важный текст" и заменить на "Не такой уж и важный текст"

/* const changeText = document.querySelector('.main p');
changeText.innerText = 'Не такой уж и важный текст' */

// 2. Заменить fb на facebook

/* const changeLinkFacebook = document.querySelector('.media .fb a');
changeLinkFacebook.innerText = 'facefook'; */

// 3. При нажатии на *** должен появиться текст

/* const getClick = document.querySelector('.point_1');
getClick.addEventListener('click', () => {
    getClick.innerText = 'Point 1'; // изменение текста во время клика
});
const getClick2 = document.querySelector('.point_2');
getClick2.addEventListener('click', () => {
    getClick2.innerText = 'Point 2'; // изменение текста во время клика
});
const getClick3 = document.querySelector('.point_3');
getClick3.addEventListener('click', () => {
    getClick3.innerText = 'Point 3'; // изменение текста во время клика
}); */

//===========================TASK_3====================================

/* const main_elem = document.querySelector('.main');
main_elem.addEventListener('click', () => {
    main_elem.style.color = random_color();
    main_elem.style.backgroundColor = random_color();
    main_elem.style.padding = '20px';
}); */

// Реализовать функцию random_color, которая возвращает случайный цвет в формате rgb: rgb(r, b, g)
function getRandomColor () {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}
console.log(getRandomColor());

const random_color = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

console.log(random_color());

// cчитываем значения текста и добавляем счетчик:


const main_elem = document.querySelector('.main');
main_elem.addEventListener('click', () => {
    const value = main_elem.innerText;
    main_elem.innerText = +value + 1;
});