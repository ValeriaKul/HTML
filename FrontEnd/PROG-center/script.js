//============18================
function handler1(array) {
  let newArray = array.map((el) => (el = Math.abs(el)));
  return newArray;
}

let arr1 = [12, 4, 54, 3, 4];
let arr2 = [1, 1, 1, 1, 1, 1, 1];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [];
// console.log(handler(arr1));
// console.log(handler(arr2));
// console.log(handler(arr3));
// console.log(handler(arr4));

//============19================
// Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами,
// формирует новый массив, из которого исключены числа, равные своему индексу в массиве.
// Для решения задачи используйте метод массива filter и indexOf.

// function handler2 (array) {
//   let newArray = array.filter((element, index) => {
//     array.indexOf(element) === index});
//     return newArray;
// }

let arr = [12, 1, 1, 3, 5];
// 0  1  1  3  4
// console.log(handler2(arr));

function handler3(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    console.log("Index " + i + " Element " + array[i]);
    if (array[i] !== i) newArray.push(array[i]);
  }
  return newArray;
}

// let arr = [12, 1, 1, 3, 5];
// let arr55 = [1, 1, 1, 1, 1, 1, 1];
// // console.log(handler3(arr));
// console.log(handler3(arr55));

//=============20============
/* Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами,
 формирует новый массив после дедупликации (удалены все повторяющиеся числа).
Для решения задачи используйте метод массива filter. */

function handler(array) {
  let newArray = array.filter((element) => array.indexOf(element));
  return newArray;
}

let newArr = [12, 4, 54, 3];
console.log(handler(newArr));

let chars = ["a", "b", "a", "c", "b"];
let uniqueChars = chars.filter((element, index) => {
  return chars.indexOf(element) === index;
});

console.log(uniqueChars);
