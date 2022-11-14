// let num1 = prompt('Введите число 1');
// let num2 = prompt('Введите число 2');

// console.log(Math.max(num1, num2));

// function returnBoolean(num) {
//     if (num % 2 == 0) {return true} 
//     else {return false}
// }

// console.log(returnBoolean(1));
// console.log(returnBoolean(12));

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = i;
// }
// console.log(array);

// let newArray = [...new Array(10)].map((elem, index) => elem = index);
// console.log(newArray);

// const numbers = [12, 4, 3, 34, 3, 1, 5, 34];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0) {
//         count += numbers[i];
//     }
// }
// console.log(count);

// let count2 = numbers.filter(el=> el % 2 === 0).reduce((total, el) =>  total + el );
// console.log(count2);

// forEach
const numbers = [12, 4, 3, 34, 3, 1, 5, 34];
// numbers.forEach((elem, index, array) => console.log(elem, index, array));

function forEach (array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
}

// forEach(numbers, (elem, index, array) => console.log(elem, index, array));

const result = numbers.map(elem => elem ** 2);
// console.log(result);

// map
const numbers2 = [12, -4, 3, -34, 3, 1, -5, -34];
let newNumbers = numbers2.map(elem => elem > 0? elem : -elem);
// console.log(newNumbers);

// filter 
const result3 = numbers2.filter(elem => elem > 0);
// console.log(result3);

const result4 = numbers2.filter(elem => elem > -10 && elem < 10);
// console.log(result4);

// find 
const arr = ['велосипед', 'смокаты', 'коньки', 'лыжи'];
const word = arr.find(el => el.length < 7);
// console.log(word);

const products = [
    {
        id: 1,
        title: 'bike',
        price: 45000
    },
    {
        id: 2,
        title: 'skate',
        price: 30000
    },
    {
        id: 3,
        title: 'skates',
        price: 13000
    },
    {
        id: 4,
        title: 'skis',
        price: 7000
    },
    {
        id: 5,
        title: 'scooter',
        price: 15000
    },
] 

// products.forEach(product => console.log(product.title));

const newArray = products.filter(product => product.price < 20000);
// console.log(newArray);

// вызвать метод массива и сформировать новый массив, который состоит из 
// объектов со свойствами title, price;

const newArray2 = products.map(product => (
    {
        prise: product.price,
        title: product.title
    }
 ));
console.log(newArray2);

