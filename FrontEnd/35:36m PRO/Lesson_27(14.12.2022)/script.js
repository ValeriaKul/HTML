//? SPA - single pade application
//? HTTP - Hyper Text Transfer Protocol

//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/guide/

//todo 1: Создать функцию, которая получает в качестве аргумента название поста и добавляет в элемент #root параграф с названием поста
//todo 2: Доработать функцию createPost таким образом, чтобы функция получала два аргумента (заголовок и текст поста) и формировала следующую верстку
/*
<div>
    <p>Заголовок</p>
    <p>Текст</p>
</div>
*/
//todo 3: Добавить скрипт, который позволит при отправке формы выводить в консоль значение указанного id
//todo 4: Доработать процесс, чтобы при отправке формы в интерфейс добавлялся пост с указанным id
//todo 5: Добавить элементу div (контейнер для поста) класс post
//todo 6: Добавить параграфу с заголовком класс subheader и увеличить у него размер текста до 30 px
//todo 7: Добавить форму с полями заголовок (input) текст (textarea) и id пользователя (input). При отправке формы данные из нее должны выводиться в консоль
//todo 8: Cтилизовать Форму #2
//todo 9: Cоздать функцию, которая получает в качестве аргументов title, body, user_id и отправляет эти данные на сервер для добавления нового поста
//todo 10: Применить функию sendPost в отправке формы. Получив данные из формы отправьте их на сервер для добавления нового поста
//! todo 11: Получив данные с сервера добавьте их в массив posts и вызовите rerender, предварительно создав его

const root = document.querySelector('#root');
const form = document.querySelector('.form');
const add_post_form = document.querySelector('.add_post_form');

let posts = [];

function createPost (title, body) {
    const container = document.createElement('div');
    const p_tille = document.createElement('p');
    const p_body = document.createElement('p');

    p_tille.innerText = title;
    p_body.innerText = body;

    container.classList.add('post');
    p_tille.classList.add('subheader');

    container.append(p_tille, p_body);
    root.append(container);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(({title, body}) => createPost (title, body))
    e.target.id.value = '';
})

add_post_form.addEventListener('submit', e => {
    e.preventDefault();
    const {title, body, user_id} = e.target;
    sendPost(title.value, body.value, user_id.value);
    title.value = '';
    body.value = '';
    user_id.value = '';
})

function sendPost(title, body, userId) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({title, body, userId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
      .then(({title, body}) => createPost(title, body));
}

function rerender() {
    
}