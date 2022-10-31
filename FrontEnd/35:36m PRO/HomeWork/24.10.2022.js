/* Фильтрация по диапазону

Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и 
возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
 */
//========TASK_1========
function filterRange(array, a, b) {
    let newArray = array.filter(el=> el >= a && el <=b) 
    return newArray;
}

/* Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr ); // [3, 1] */
//========TASK_2========

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < a || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1, -5, 10, 2, 4];
filterRangeInPlace(arr, 1, 4); 
// console.log(arr);

function filterRangeInPlace2(array, a, b) {
    array.filter(el => {el < a || el > b})
}  

filterRangeInPlace2(arr, 1, 4); 
console.log(arr);
