// callback - функция обратного вызова. Функция, которую мы передаем в другую функцию в качестве аргумента

// function sum (a, b) {
//     return a + b;
// }

// sum(10, 15) // передача числовых значений в качестве агрументов - IMMEDIATLY INVOKE FUNCTION
            // синтаксис немедленного вызова

// В JS функция - это объект
// function fn(anotherFn) {
//     anotherFn();
// }

// fn(sum(10, 15)); //неправильный вызов функции
// fn - функция высшего порядка, потому что она вызывает другую функцию - HIGH ORDERED FUNCTION
// anotherFn - функция обратного вызова - CALLBACK 
// fn(() => sum(10, 15)); //правильны вызов callback функции

function sum(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}
// функция lib позволяет в консоли отображать результат выполнения функции, которую в нее передаем
function lib(callback) {
    console.log(callback(10, 15));
}

// lib(sum, 10, 15) // принимает функцию sum и вызывает ее с аргументами 10 и 15
// при использовании callback, функция lib ничего не знает о них. CB не зависит от lib

// .map(), .forEach()

// Создать функцию, которая принимает аргумент num и добавляет к нему 2

function add (num) {
    return num + 2;
}

// console.log(add(10)); //12

// .map() используется для итерации по массиву и выполнения функции для каждого из них. 
// Не мутирует массив, возвращает новый массив с изменениями

// с помощью метода .map() добавить к каждому числу внутри массива 3
// [1, 2, 3, 4, 5]

let array = [1, 2, 3, 4, 5];

let addThree = num => num + 3

let newArray = array.map(el=> el + 3);
let newArray2 = array.map(addThree);
// console.log(newArray);
// console.log(newArray2);

//реализовать функцию, которая аргументами принимает массив и callback
//функция должна вызвать callback для каждого элемента массива
//функция map должна возвращать новый массив с измененнными значениями


function myMap (array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(callback(array[i]));  
    }
    return newArray;
}

console.log(myMap(array, addThree));
// 1. myMap принимает массив array и callback (addThree)
// 2. Создаем newArray - пустой массив, который в итоге должен возвратиться
// 3. Перебираем массив array и для каждого элемента вызываем функцию addThree
// 4. Каждый элемент после функции пушится в новый массив


let array2 = ['Ivan', 'Andrey', 'Arsen']
array2.forEach(el => console.log(`Hello, ${el}`))

// с помощью метода forEach () возвратить в переменную сум сумму всех элементов

function addSymbol (array) {
    let word = '';
    for (let i = 0; i < array.length; i++) {
        word = word + array[i];
    }
    return word;
}
let array3 = ['a', 'b', 'c', 'd'];
console.log(myForEach(array3, addSymbol));