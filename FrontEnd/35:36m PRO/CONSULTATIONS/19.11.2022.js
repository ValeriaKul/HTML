//todo ТРЕНАЖЕРЫ:
//? https://www.codewars.com/

//? www.learn.javascript.ru/drag-and-drop

const products = [
  {
    id: 1,
    title: "bike",
    price: 45000,
  },
  {
    id: 2,
    title: "skate",
    price: 30000,
  },
  {
    id: 3,
    title: "skates",
    price: 13000,
  },
  {
    id: 4,
    title: "skis",
    price: 7000,
  },
  {
    id: 5,
    title: "scooter",
    price: 15000,
  },
];

let newProducts = products.map((elem) => elem.id ** 2); // возведение в квадрат
let newProducts2 = products.map((elem) => {
  return { id: elem.id ** 2, price: elem.price + 100000 };
}); // возведение в квадрат каждого id у объекта products & прибавили ко всем ценникам 100000
console.log(newProducts2);

let a = products.filter((elem) => elem.price > 30000);
console.log(a);

function filter2(array, callback) {
  let newArray = [];
  for (const elem of array) {
    if (callback(elem)) {
      newArray.push(elem);
    }
  }
  return newArray;
}

function checkElem(elem) {
    return elem.id > 2
}

filter2(products, checkElem);
