const user = {
    first_name: 'Nelli',
    last_name: 'Petrova',
    age: 27
}

// user = [1, 2, 3];  => fail переопределять константу - НЕЛЬЗЯ

// user.age = 50; => true менять внутри константы элементы - МОЖНО

// // user = {
//     city: 'Petrova' => FAIL
// }

//Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта,
//  а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const getValue = (user, key) =>  user[key];
console.log(getValue(user, 'last_name'));
console.log(getValue(user, 'age'));


// проверить масиив на пустые значения
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

//   console.log(people.hasOwnProperty('age')); // true / false 
//   console.log('age' in people[o]); // true / false


// --------------------------------------------------------------------------------------------------------------------

class Car {
    constructor(name, model, country, volume, color, year) {
        this.name = name;
        this.model = model;
        this.country = country;
        this.volume = volume;
        this.color = color;
        this.year = year;
    }

    get_info() {
        console.log(`Машина: ${this.name} (${this.model}), из страны: ${this.country}`);
    }
}

//создаем экземпляры классов

const car_1 = new Car('Toyota', 'RAV4', 'Japan', 2.4, 'red', '2020');
const car_2 = new Car('BMW', 'X3', 'Germany', 2.0, 'black', '2018');
const car_3 = new Car('Audi', 'X3', 'Germany', 2.0, 'black', '2018');

// вызываем рукописный метод
car_1.get_info();

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'

class Country {
    constructor (country, capital, population, climate) {
        this.country = country;
        this.capital = capital;
        this.population = population;
        this.climate = climate;
    }

    get_capital() {
        console.log(`The capital of ${this.country} is ${this.capital}`);
    }
}

const country1 = new Country('Russia', 'Moskow', 143000000, 'mixed');
const country2 = new Country('Latvia', 'Riga', 6000000, 'temperate');
const country3 = new Country('Ukraine', 'Kiev', 43000000, 'temperate continental');

country1.get_capital();
country2.get_capital();
country3.get_capital();


