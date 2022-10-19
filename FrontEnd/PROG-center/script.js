//============18================
function handler (array) {
    let newArray3 = array.map(el => el = Math.abs(el));
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

function handler2 (arrayOld) {
	let newArray = arrayOld.filter (el => el !== el.indexOf() )
  return newArray;
}

  
  
let arr = [12, 1, 1, 3, 5];
console.log(handler2(arr));


function handler3 (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    console.log('Index ' + i + ' Element ' + array[i]);
    if (array[i] !== i)
      newArray.push(array[i]);
  }
  return newArray;
}

// let arr = [12, 1, 1, 3, 5];
// let arr55 = [1, 1, 1, 1, 1, 1, 1];
// // console.log(handler3(arr));
// console.log(handler3(arr55));