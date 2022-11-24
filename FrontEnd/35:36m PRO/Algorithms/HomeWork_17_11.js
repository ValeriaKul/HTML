//todo: 1. Даны два целых числа x и n, напишите функцию для вычисления x^n. Решение 1 - рекурсивно O(n). Решение 2 -        улучшить решение 1 до O(lon n)

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(5, 3)); //? 125

function pow2(x, n) {
  if (n === 1) {
    return x;
  } else {
    if (n % 2 === 0) {
      let b = pow2(x, n / 2);
      return b * b;
    } else {
      return x * pow2(x, n - 1);
    }
  }
}
console.log(pow2(5, 3)); //? 125

//todo: 2. Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.

let arrayM = [100, 112, 256, 349, 770];
let arrayN = [72, 86, 113, 119, 265, 445, 892];
let totalArray = arrayM.concat(arrayN).sort((a, b) => a - b);

function findK(array, k) {
  return array[k - 1];
}

console.log(totalArray); //[72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
console.log(findK(totalArray, 7)); //256

//todo: 3. Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)

let arr = [1, 1, 2, 2, 2, 2, 3];

function binarySearch(array, x, searchCriteria) {
  // область поиска array[leftSide ... rightSide]
  let leftSide = 0;
  let rightSide = array.length - 1;
  // инициализируем результат на -1
  let result = -1;

  // цикл будет до тех пор, пока пространство поиска не будет исчерпано
  while (leftSide <= rightSide) {
    // находим среднее значение и сравниваем с искомым числом
    let mid = Math.floor((leftSide + rightSide) / 2);

    // если цель найдена, обновляем результат
    if (x === array[mid]) {
      result = mid;
      // продолжаем поиск влево (нижние индексы)
      if (searchCriteria === "first") {
        rightSide = mid - 1;
      }
      // продолжаем поиск вправо (верхние индексы)
      if (searchCriteria === "last") {
        leftSide = mid + 1;
      }
    }
    // если цель меньше среднего элемента, отбрасываем правую половину
    if (x < array[mid]) {
      rightSide = mid - 1;
    }
    // если цель меньше среднего элемента, отбрасываем левую половину
    if (x > array[mid]) {
      leftSide = mid + 1;
    }
  }
  // вернем найденный индекс или -1, если элемент не найден
  return result;
}
// вызываем метод для поиска первого вхождения искомого элемента в массив
let first = binarySearch(arr, 2, "first");
// вызываем метод для поиска последнего вхождения искомого элемента в массив
let last = binarySearch(arr, 2, "last");
// вычисляем количество вхождений как разницу между первым и последним индексами вхождений
let count = last - first + 1;

first !== -1
  ? console.log(`Element 2 occured ${count} times`)
  : console.log("Element not found in the array");

//todo: Найдите пиковый элемент в двумерном массиве. Элемент является пиковым, если он больше или равен своим четырем соседям слева, справа, сверху и снизу. Например, соседями для A[i][j] являются A[i-1][j], A[i+1][j], A[i][j-1] и A[i][j+1]. Для угловых элементов отсутствующие соседи считаются отрицательными бесконечными значениями.

let array = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

console.log(array);

function getNum(array) {
  let newArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      newArray[i][j] = checkNum(array, i, j) ? 1 : 0;
    }
  }
  return newArray;
}

function checkNum(array, x, y) {
  let countResult = 0;
  let countCheck = 0;

  for (let i = x - 1; i < x + 2; i++) {
    if (i >= 0 && i < array.length) {
      for (let j = y - 1; j < y + 2; j++) {
        if (j >= 0 && j < array.length) {
            countCheck++;
          if (array[x][y] > array[i][j]) {
            countResult++;
          }
        }
      }
    }
  }
  console.log('x - ' + x + '; y - ' + y + ' Check - ' + countCheck + '; Result - ' + countResult);

  if (countCheck === countResult) {
    return true;
  } else {
    return false;
  }
}

console.log(getNum(array));
