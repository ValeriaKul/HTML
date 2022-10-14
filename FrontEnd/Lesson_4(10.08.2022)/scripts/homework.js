// 1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. 
//    Выведите результат в консоль. 
// console.log('Task_1:');
function getTextLength (text) {
    let textLength = text.length;
    return textLength;
}
// console.log(getTextLength('Hello world'));

// 2. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и 
//    возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 
// console.log('Task_2:');
function getExponentiation (number1, number2 = 2) {
    return Math.pow(number1, number2);
}
// console.log(getExponentiation(2));

// 3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. 
//    Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).
// console.log('Task_3:');
function getMax (number1, number2) {
    return Math.max (number1, number2);
}
// console.log (getMax(4, 12));

function getMaxIf (number1, number2) {
    let max;
    if (number1 > number2) {
        max = number1;
    } else if (number1 < number2) {
        max = number2;
    } else {
        max = number1;
    }
    return max;
}
// console.log(getMaxIf(5,4));

// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные 
//    числа по убыванию. Используйте условный оператор.
// console.log('Task_4:');
function getMin (number1, number2, number3) {
    let min;
    let mid;
    let max;
    if (number1 <= number2 && number1 <= number3) {
        min = number1;
    } 
    if (number2 <= number1 && number2 <= number3) {
        min = number2;
    } 
    if (number3 <= number1 && number3 <= number2) {
        min = number3;
    } 
    if ((number1 >= number2 && number1 <= number3) || (number1 <= number2 && number1 >= number3)) {
        mid = number1;
    } 
     if ((number2 <= number1 && number2 >= number3) || (number2 >= number1 && number2 <= number3)) {
        mid = number2;
    } 
    if ((number3 <= number1 && number3 >= number2) || (number3 >= number1 && number3 <= number2)) {
        mid = number3;
    } 
     if (number1 >= number2 && number1 >= number3) {
        max = number1;
    } 
     if (number2 >= number1 && number2 >= number3) {
        max = number2;
    } 
     if (number3 >= number2 && number3 >= number1) {
        max = number3;
    } 
    if (number1 === number2 && number1 === number3) {
        min = number1;
        mid = number2;
        max = number3;
        console.log('All numbers are same.')
    }
    return `MAX = ${max}\nMID = ${mid}\nMIN = ${min}`;
}
// console.log(getMin(5, 8, 2));
// console.log(getMin(8, 5, 2));
// console.log(getMin(5, 5, 5));
// console.log(getMin(5, 2, 5));

// 5. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. 
//    Используйте условный оператор.
// console.log('Task_5:');
function getMax2 (number1, number2, number3, number4, number5) {
    let max;
    if ((number1 >= number2) && (number1 >= number3) && (number1 >= number4) && (number1 >= number5)) {
        max = number1;
    }
    if ((number2 >= number1) && (number2 >= number3) && (number2 >= number4) && (number2 >= number5)) {
        max = number2;
    }
    if ((number3 >= number1) && (number3 >= number2) && (number3 >= number4) && (number3 >= number5)) {
        max = number3;
    }
    if ((number4 >= number1) && (number4 >= number2) && (number4 >= number3) && (number4 >= number5)) {
        max = number4;
    }
    if ((number5 >= number1) && (number5 >= number2) && (number5 >= number3) && (number5 >= number4)) {
        max = number5;
    }
    return max;
}
// console.log('MAX is ' + getMax2 (1, 5, 8, 2, 0));
// console.log('MAX is ' + getMax2 (5, 5, 8, 2, 0));
// console.log('MAX is ' + getMax2 (5, 5, 5, 5, 5));
// console.log('MAX is ' + getMax2 (54, 66, 12, 8, 8));