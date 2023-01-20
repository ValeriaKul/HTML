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

// GET - запрос

const fetchData = () => {
  fetch("http://localhost:3000/posts", {
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
    container.innerHTML += `
            <div class="post">
                <h5>${el.title}</h5>
                <p class="post-descr">${el.descr}</p>
            </div>
        `;
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
    fetch("http://localhost:3000/posts", {
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
    </div>
    `
}

// функция очистки полей воода после отправки формы с новым постом
const clearInput = () => {
    title.value = '';
    descr.value = '';
}

const Main = () => {
    const [title, setTitle] = useState('')
    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}