//todo: 00:00:00-00:31:00 - ссылки, yстановка Node.js 

//! https://html5book.ru/
//! https://learn.javascript.ru/getting-started
//! https://developer.mozilla.org/ru/
//! https://www.codewars.com/

//todo: node.js
//? https://nodejs.org/en/
//? https://linuxhint.com/install-nodejs-linux-mint/ ссылка для установки node.js на линукс

//todo: 00:31:00-01:24:00  - создание форм (Логин/Пароль), label - спец тег, который объясняет, что надо добавить

let form = document.querySelector(".form1");

form.onsubmit = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    console.log(Object.fromEntries(formData));
}  //?{email: 'airelav.vk@gmail.com', password: 'ertyhjmnbvc'}

//todo: 01:24:00 01:30:00- создание репозитория

//! https://github.com/Ray3en/tel-ran-consultations-fe - репозиторий преподавателя