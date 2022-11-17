// reduce 
const numbers = [13, 2, 4, 3, 34, 5, 6, 4, 3];
const result = numbers.reduce((prev, item) => prev + ((item % 2 === 0) ? item : 0));
// console.log(result);

// используя reduce найти наибольшее число в массиве и вывести его

const maxValue = numbers.reduce((prev, item) => Math.max(prev, item));
// console.log(maxValue);

function reduce (array, callback, initial) {
    let lastCall = initial;

    for (let i = 0; i < array.length; i++) {
        lastCall = callback(lastCall, array[i]); 
    }

    return lastCall;
} 

const result2 = reduce(numbers, (prev, item) => Math.max(prev, item), 0);

// console.log(result2);

const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 27000
    },
    {
        id: 5,
        title: 'лыжи',
        price: 300000
    }
];

// используя методы массивов создайте массив из названий товаров

const productsArray = products.map(el => el.title);
// console.log(productsArray);

const productsArray2 = products.map(el => {
    const {title} = el;
    return title;
});

// написать скрипт, который формирует массив из объектов с товарами
// которые стоят дешевле 26000

const productsArray3 = products.filter(el => el.price < 26000);

const productsArray4 = products.filter(({price}) =>  price < 26000)
    
// найти общую сумму товаров используя методы массивов

const sumTotal = products.reduce((prev, item) => prev + item.price, 0);
// console.log(sumTotal);

// используя методы массивов найти самый дорогой товар

const maxPrice = products.reduce(
    (prev, item) => prev.price > item.price ? prev : item);
// console.log(maxPrice);

// const maxPrice2 = products.reduce(
//     (prev, item) => {return }prev.price > item.price ? prev : item);
// console.log(maxPrice);

const products2 = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3,
        marks: [4, 3, 5, 3]
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000,
        count: 2,
        marks: [3, 5, 3]
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 270000,
        count: 0,
        marks: [4, 3, 5]
    },
    {
        id: 5,
        title: 'лыжи',
        price: 30000,
        count: 1,
        marks: [4]
    }
];

// используя методы массивов 
// написать процесс, который позволит сформировать массив
// из объектов с названием, ценой и средней оценкой

let newList = products2.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        marks_AVG: product.marks.reduce((a, b) => (a + b) / product.marks.length)
}));

console.log(newList);

let newList2 = products2.map(({id, title, price, marks}) =>({
    id, title, price,
    AVG_mark: marks.reduce((a, b) => a+b) / marks.length
}) )

console.log(newList2);

// const newList3 = products2.map(({marks, ...product}) => ({
//     ...product,
//     avg_mark: marks.reduce((a, b) => a + b) / marks.length
// }));

// используя методы массивов найти общую стоимость всех товаров
const task4 = products2.reduce((a, b) => a + b.count * b.price, 0);
// console.log(task4);
