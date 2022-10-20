const people = [
    {
      first_name: "Ivan",
      last_name: "Ivanov",
      age: 20,
      city: "Moscow",
      country: "Russia",
      active: true,
    },
    {
      first_name: "dmitry",
      last_name: "Petrov",
      age: 7,
      city: "Berlin",
      country: "Germany",
      active: true,
    },
    {
      first_name: "Irina",
      last_name: "Alexandrova",
      age: 46,
      city: "Paris",
      country: "France",
      active: false,
    },
    {
      first_name: "Denis",
      last_name: "Sokolov",
      age: 10,
      city: "Rome",
      country: "Italy",
      active: false,
    },
  ];
// 1. сформируйте массив строк - каждая строка включает в себя информацию по каждрму человеку в следующем порядке:
// "<name> <last_name> (<city>, <country>)".

  const infoArray = people.map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country})`);
//   console.log(infoArray);

// 2. сформируйте массив активных людей
  const infoArray2 = people.filter(el => el.active === true);
//   const infoArray2 = people.filter(el => el.active);
//   console.log(infoArray2);
// 3. сформируйте массив из людей, чьи имена начинаются на 'D' без учета регистра
  const infoArray3 = people.filter(el => el.first_name[0] == 'D' || el.first_name[0] == 'd');
//   const infoArray3 = people.filter(el => el.first_name[0].toUpperCase() = 'D'); 
//   console.log(infoArray3);
// 4. Получите из массива объект, где страной проживания является Германия
const peopleFromGermany = people.find (person => person.country === 'Germany'); // вернется объект
const infoArray4 = people.filter(person => person.country === 'Germany'); // вернется массив
    //  console.log(infoArray4);
// 5. Сформируйте массив из совершеннолетних пользователей. Выведите в консоль результат в формате: 
// [{<name> <last_name> (<age>), <country> (<city>)}, {...}, {...}, ...]
  const infoArray5 = people.filter(person => person.age >= 18)
                           .map(person => `${person.first_name} ${person.last_name} (${person.age}), ${person.country} (${person.city})`);
    //  console.log(infoArray5);

// 6. Измените у первого элемента значение имени на 'Petr' и возраст на 99;
  people[0].first_name = 'Petr';
  people[0].age = 99;
  console.log(people);
