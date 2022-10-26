//Задан массив объектов workers.
//   Выведите на экран карточки со следующей информацией по всем работникам:
//   ID, Имя, Фамилия, Возраст, Зарплата, фото.
//    Зарплата рассчитывается через умножение ставки на количество дней.
//    Карточки должны включать отображение фотографии.
//  Примените стили к карточкам: width, padding, border, background-color.
const workers = [
    {
      id: 1,
      first_name: "Olga",
      last_name: "Petrova",
      age: 18,
      rate: 100,
      days: 15,
      photo: "https://reqres.in/img/faces/12-image.jpg",
      progress: 50,
    },
    {
      id: 2,
      first_name: "Petr",
      last_name: "Ivanov",
      age: 46,
      rate: 70,
      days: 22,
      photo: "https://reqres.in/img/faces/4-image.jpg",
      progress: 10,
    },
    {
      id: 3,
      first_name: "Oleg",
      last_name: "Orlov",
      age: 32,
      rate: 34,
      days: 10,
      photo: "https://reqres.in/img/faces/10-image.jpg",
      progress: 75,
    },
    {
      id: 4,
      first_name: "Irina",
      last_name: "Medvedeva",
      age: 22,
      rate: 85,
      days: 17,
      photo: "https://reqres.in/img/faces/2-image.jpg",
      progress: 30,
    },
  ];
  
  const root = document.querySelector('#root');

  function getCard (id, first_name, last_name, age, rate, days, photo, progress) {
    const card = document.createElement('div');
    const id_elem = document.createElement('p');
    const name_elem = document.createElement('p');
    const age_elem = document.createElement('p');
    const salsary_elem = document.createElement('p');
    const photo_elem = document.createElement('img');
    const progressContainer = document.createElement('div');
    const progressLine = document.createElement('div');
    const progressValue = document.createElement('p');
  
    card.classList.add('card');
    progressContainer.classList.add('progress-container');
    progressLine.classList.add('progress-line');
    progressValue.classList.add('progress-value');

    progressLine.style.width = progress + '%';

    id_elem.innerText = `ID: ${id}`;
    name_elem.innerText = `Name: ${first_name} ${last_name}`;
    age_elem.innerText = `Age: ${age}`;
    salsary_elem.innerText = `Salary: ${rate * days} $`;
    photo_elem.src = photo;
    progressValue.innerText = `${progress}%`;

    progressContainer.append(progressLine, progressValue);
    card.append(id_elem, name_elem, age_elem, salsary_elem, photo_elem, progressContainer);
    return card;
  }

  workers.forEach(user => {
    const card = getCard (user.id, user.first_name, user.last_name, user.age, user.rate, user.days, user.photo, user.progress);
    root.append(card);
  })
