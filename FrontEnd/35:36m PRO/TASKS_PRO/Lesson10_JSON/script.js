// fetch - метод, который предоставляет возможность работать с http pапросами
// возвращает промис
// promise - помогает обернуть полученные данные
// resolve - запустится в случае, если запрос выполнится
// reject

// const promise = new Promise((resolve, reject) => {
// описываем работу или алгоритм ассинхронной операции
// и в конце, когда ассинхр. операция закончилась, мы вызываем resolve, прокидывая данные
//     setTimeout(() => {
// запрос к базе данных

//         resolve('data') //resolve выполнится, когда результат ассинхронной операции будет готов
//     }, 500)
// })
// console.log(promise);
// promise
//     .then((value) => {
//         console.log(promise);
//         console.log(value);
// return value.json()
//     })
//     .catch((err) => {
//         console.log(err);// уведомление об ошибке
//      //сервер упал
//      //throw Error()
//     })

// 1. pending - ожидание
// 2. fulfilled - выполнено
// 3. rejected - отказано

/* 
    fetch() - получает 2 аргумента: 
        1) ссылдка на ресурс
        2) options - свойства запроса, в котором лежит метод, заголовки, тело и т.д.
            Если запрос GET, то options можно опустить.
*/

//Переменные
let container = document.querySelector(".container");
const form = document.querySelector("form");
const title = document.querySelector("input[name='title']")
const descr = document.querySelector("input[name='descr']")
const deleteButtons = document.querySelectorAll(".delete_btn")
const URL = 'http://localhost:3000/posts'

// GET - запрос

const fetchData = () => {
  fetch(URL, {
    method: "GET"
  }) //возвращает промис
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        showData(data)});
};

fetchData();

const showData = (arr) => {
  container.innerHTML = '';
  arr.map((el) => {
    showNewPost(el);
  });
};

form.addEventListener("submit", e => {
    e.preventDefault();
    // введенные пользователем объекты
    const newTitle = title.value;
    const newDescr = descr.value;
    // объединяем в объект перед отправкой на сервер
    const newPost = {
        title: newTitle,
        descr: newDescr
    }
    addPost(newPost);
    fetchData();
})


const addPost = (post) => {
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        showNewPost(data);
        clearInput();
    })
}

// функция отрисовки добавленного элемента после POST - запроса
const showNewPost = (post) => {
    container.innerHTML += `
    <div class="post">
        <h5>${post.title}</h5>
        <p class="post-descr">${post.descr}</p>
        <button class="delete_btn" id = ${post.id}>Delete</button>
    </div>
    `
}

// функция очистки полей воода после отправки формы с новым постом
const clearInput = () => {
    title.value = '';
    descr.value = '';
}
document.addEventListener('click', e => {
    const post_for_delete = e.target
    if (post_for_delete.className === 'delete_btn') {
        deletePost(e.target);
    }
})

const deletePost = (btn) => {
    fetch(`${URL}/${btn.id}`, {
        // При отправке DELETE нам нужно обратиться к конкретному объекту по его id
        method: "DELETE"
    })
    .then(() => {
        // в ответе на DELETE приходит пустой объект {}
        // из HTML удалить элемент, на кнопку которого мы нажали
        if (response.ok) {
            btn.parentElement.remove()
        }
    })
    .catch()
}

// UPDATE - (PUT)
/* 
    1. Создать кнопку "Редактировать"
    2. Вешаем слушатель события
    3. при нажатии вызываем функцию, которая меняет в карточке элемента теги h5, p на теги Input 
        вывести конпку СОХРАНИТЬ
    4. По нажатию на СОХРАНИТЬ вызывать функцию, которая будет отправлять на сервер обновление данных
    5. В функции из п. 4  реализовать метод PUT (fetch), в теле передать данные из п. 4
*/