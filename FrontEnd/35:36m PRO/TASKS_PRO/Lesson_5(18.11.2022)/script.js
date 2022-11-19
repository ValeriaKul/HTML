const cars = [
  {
    mark: "Mercedes-Benz",
    model: "S600",
    year: "1999",
    price: 15000,
  },
  {
    mark: "BMW",
    model: "M3",
    year: "2002",
    price: 18000,
  },
  {
    mark: "Audi",
    model: "Q3",
    year: "2006",
    price: 14000,
  },
  {
    mark: "VW",
    model: "Golf-4",
    year: "1998",
    price: 8000,
  },
  {
    mark: "Toyota",
    model: "MarkX",
    year: "2005",
    price: 13000,
  },
  {
    mark: "Lexus",
    model: "RX300",
    year: "2007",
    price: 20000,
  },
  {
    mark: "Mercedes-Benz",
    model: "S500",
    year: "1995",
    price: 12000,
  },
];




//toDo 1.  Bернуть массив с маркой и моделью машины
const carsModels = cars.map((car) => `${car.mark} ${car.model}`); //? 1й вариант

const carsModels1 = cars.map(({ mark, model }) => `${mark} ${model}`); //? 2й вариант с деструктуризацией

//toDo 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет объединенная строка `Марка Модель` и все остальные свойства [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 },{ markModel : "BMW M3", year : "2002", price : 18000 }]
const newCars = cars.map((car) => {                                //? 1й вариант
    return {
        markModel: `${car.mark} ${car.model}`,
        year: car.year,
        price: car.price,
    };
});

const newCars2 = cars.map(({ mark, model, price, year }) => {      //? 2й вариант с деструктуризацие
    return {
        markModel: `${mark} ${model}`,
        price,
        year,
    };
});

const newCars3 = cars.map(({ mark, model, ...rest }) => {          //? 3й вариант с деструктуризацие
    return {
        markModel: `${mark} ${model}`,
        ...rest,
    };
});

//toDo 2.  Посчитать среднюю цену всех автомобилей
const task2 = cars.reduce((a, {price}) => (a + price), 0)  / cars.length

let sum = 0;
for (let i = 0; i < cars.length; i++) {
    sum += cars[i].price
}

//toDo 3. Вернуть массив машин, которым меньше 25 лет

const task_3 = cars.filter (({year}) => year > 2002)

//? объект Date
//! moment.js - библиотека для работы с датами
const date = new Date("11/18/2005"); //? UTC
const date2 = new Date("11/18/2002").getFullYear(); //? Получить год
const today2 = Date.now(); //? сколько секунд прошло с 1 января 1970 года
// const today = new Date(); //? сегодня
// const twenty_years = today.getFullYear() - 20; 

//toDo 4. Вернуть массив машин, которым меньше 25 лет, учитывая сегодняшнюю дату
const today = new Date(); //? сегодня
const twenty_years = today.getFullYear() - 20;
const task_4 = cars.filter (({year}) => year > twenty_years)


const users = [
    { name: "Arsen", bDay: "03/03/1998"},
    { name: "Ivan", bDay: "10/25/1990"},
    { name: "Alex", bDay: "07/05/1995"},
    { name: "Kostya", bDay: "02/12/2005"},
    { name: "Max", bDay: "05/07/2001"},
    { name: "Anna", bDay: "01/15/2002"},
    { name: "Julia", bDay: "09/13/2003"},
    { name: "Oksana", bDay: "10/15/2002"},
];

//ToDO 5. Кто из пользователей старше 20? с учетом текущей даты

const task_5 = users.filter(({bDay}) => new Date(bDay).getFullYear() < twenty_years)

//TODO 6. Отсортировать массив с машинами по цене (от меньшей к большей)
//! array.sort(callback) 
//? если не указывать callback функцию, то sort будет производить побитовую проверку
//? для сортировки от меньшего к большему - nums.sort((a, b) => a - b)
//? для сотрировки от большего к меньшему - nums.sort((a, b) => b - a)
/* 
nums.sort((a, b) => {
    if (a > b) {b встает на первое место} иначе, все остается так же
    if (a == b) {порядок не меняется}
    if (a < b) {a встает на первое место}
}) */

const task_6_1 = cars.sort((prev, next) => prev.price - next.price);
console.log(task_6_1);

const nums1 = [40, 15, 28];
const sortedNums1 = nums1.sort((a, b) => a - b);

/* 

*/
