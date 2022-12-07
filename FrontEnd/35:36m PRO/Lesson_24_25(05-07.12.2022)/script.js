// localStorage.setItem('test_item', 'item');
//  console.log(localStorage.getItem('test_item'));
//!    =========== JSON ==========
// const arr = {
//   data: [1, 4, 5, 34, 4],
// };
// localStorage.setItem("test_item", JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem("test_item")));
//? https://2048game.com/ru/
/* реализовать процесс в js, который при отправке формы выводит содержимое поля ввода в консоль */

//! 1) первая загрузка
//! 2) вторая загрузка
const form = document.querySelector(".add_task");
const tasks_container = document.querySelector(".tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = event.target.task.value;

  write_local([...read_local(), { id: Date.now(), task }]);
  event.target.task.value = "";
  rerender();
});

//todo: доработать js таким образом, что бы указанное значение добавлялось в массив в localStorage
//? write_local - получает в каечстве аргумента массив и записыввает его в localStorage под ключом tasks
//? read_local - не получает аргументов и возвращает из localStorage значение, преобразованное в массив

function write_local(array) {
  localStorage.setItem("tasks", JSON.stringify(array));
}

function read_local() {
  return JSON.parse(localStorage.getItem("tasks")) ?? []; //? ?? - оператор нулевого присвоения.
}

function createCard(title, id) {
  const card = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");
  card.append(p, button);

  p.innerText = title;
  button.innerText = "Delete";

  button.addEventListener("click", () => {
    deleteCard(id);
  });
  return card;
}

function deleteCard(id) {
   const newCards = read_local().filter(el => el.id !== id);
   write_local(newCards);
   rerender();
}

//todo: Написать функцию rerender() которая:
//todo: 1) очищает содержимое ".tasks"
//todo: 2) выводит параграфы с текстом задачи в элемент ".tasks"

function rerender() {
  tasks_container.innerText = "";
  if (read_local().length === 0) {
    const p_elem = document.createElement("p");
    p_elem.innerText = "Никаких задач нет!";
    tasks_container.append(p_elem);
  } else {
    read_local().forEach(({ task, id }) => {
      const new_card = createCard(task, id);
      tasks_container.append(new_card);
    });
  }
}

rerender();

// вынести процесс создания карточки с делом в функцию createCard

// данная функция получает в качестве аргумента название дела и возвращает
// параграф с названием дела внутри

// createCard('выучить гриды') -> <p>выучить гриды</p>

// доработать процесс таким образом, чтобы при нажатии на кнопку "Удалить"
// в консоль выводилась строка "Удалить"

// доработать обработчик нажатия на кнопку таким образом
// чтобы в консоль выводилась строка "Удалить <id>"


