let array = [];
for (let i = 0; i < array.length; i++) {
    array.push('x');
}
// console.log(array);

let returnArray = (item, count) => {
    let newArray = [];
    for (let i = 0; i < count; i++) {
        newArray.push(item);
    }
}
// console.log(returnArray('x', 10));

let array1 = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        newArray1.push(i);
    }
}
// console.log(newArray1);

let rangeFilter = function (array, min, max) {
    let newArray2 = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] > min && array[i] < max) {
        newArray2.push(array1[i]);
    }
}
// console.log(newArray2);
}
rangeFilter(array1, -10, 10);

// Сделайте функцию howManyToTen, которая будет принимать массив с числами и возвращать 
// количество элементов массива которых нужно сложить, начиная с первого, чтобы получить число
// больше десяти.

let howManyToTen = (arrayInt) => {
let count = 0;
for (let i = 0; i < arrayInt.length; i++) {
    count += arrayInt[i];
    if (count > 10) {
        return i+1;
    } 
}
return 'count no more than 10';
}
// console.log(howManyToTen(array1));

// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
// Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, 
// если число положительное, и false - если отрицательное.

let isPositive = number => number > 0 ? true : false;
let newArray3 = array1.filter(isPositive);
// console.log(newArray3);

