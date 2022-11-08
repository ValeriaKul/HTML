/*1. Напишите следующую функцию, которая принимает некий массив данных. 
если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов
     - эту строку и её индекс исходном массиве 
если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов 
    - из этой цифры и её индекса в исходном массиве
во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов
- первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.
*/
//==============Task_1============

function returnTypeOfArray(array, typeOfArray) {
  let isType = true;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == typeOfArray) {
      isType = isType && true;
    } else {
      isType = isType && false;
    }
  }
  return isType;
}

function treatmentArray(array, typeOfArray) {
  let newArray = [];
  let maxElementIndex = 0;
  if (typeOfArray == "string") {
    for (let i = 1; i < array.length; i++) {
      if (array[i].length > array[maxElementIndex].length) {
        maxElementIndex = i;
      }
    }
    newArray.push(array[maxElementIndex]);
    newArray.push(maxElementIndex);
    return newArray;
  }

  if (typeOfArray == "number") {
    let maxElementIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[maxElementIndex]) {
        maxElementIndex = i;
      }
    }
    newArray.push(array[maxElementIndex]);
    newArray.push(maxElementIndex);
    return newArray;
  }
  if (typeOfArray == "mixed") {
    newArray.push("неверный тип данных в массиве");
    newArray.push(array.length);
    return newArray;
  }
}

function workWithArray(array) {
  let resultArray;
  if (returnTypeOfArray(array, "string") == true) {
    resultArray = treatmentArray(array, "string");
  }

  if (returnTypeOfArray(array, "number") == true) {
    resultArray = treatmentArray(array, "number");
  }
  if (
    returnTypeOfArray(array, "string") == false &&
    returnTypeOfArray(array, "number") == false
  ) {
    resultArray = treatmentArray(array, "mixed");
  }
  return resultArray;
}

//---------------

let stringArray = ["Hello", " ", "world", "My name is Valeria"];
let intArray = [1, 2, 3, 4, 5, 10, 15, 20];
let mixedArray = ["Hello", " ", "world", "My name is Valeria", 1, 2, 3];

// console.log(workWithArray(stringArray));
// console.log(workWithArray(mixedArray));
// console.log(workWithArray(intArray));

//===========Task_2==============

// (Необязательная задача) Напишите функцию которая будет принимать три
//  массива с любыми данными и объединять их в один, новый массив и
//  возвращать его.В зависимости от типа данных вы должны упорядочить
// данные.Сначала добавляйте только строки, затем цифры, затем булевы
// значения, все остальные значения могут быть в произвольном порядке
// добавлены далее.
// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

function sortArray(array1, array2, array3) {
  let createArray = array1.concat(array2, array3);
  let typeOfData = ["string", "boolean", "number", "other"];
  let sortArray = [];
  for (let i = 0; i < typeOfData.length; i++) {
    sortArray = sortArray.concat(pushElement(createArray, typeOfData[i], i));
  }
  return sortArray;
}

function pushElement(array, typeOfData, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == typeOfData) {
      newArray.push(array[i]);
    }
    if (
      number == 3 &&
      typeof array[i] !== "string" &&
      typeof array[i] !== "boolean" &&
      typeof array[i] !== "number"
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(
  sortArray(
    ["привет", true, 65],
    [3, [], false],
    ["js", "java", "script", "redButton"]
  )
);
