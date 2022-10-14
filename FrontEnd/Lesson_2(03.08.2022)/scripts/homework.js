// 1. Выведите в консоль результат деления числа 100 на 4.
let a = 100;
let b = 4;
console.log(a / b);

// 2. Реализуйте программу, которая вычисляет и выводит на экран значение выражения: 
//    8 / 2 + 5 - -3 / 2
let c = 8;
let d = 2;
let e = 5;
let f = -3;

console.log (c / d + e - f / d);


// 3. Выведите в консоль следующую фразу, используя конкатенацию: 
//    Lorem ipsum dolor sit amet

let text1 = 'Lorem ipsum';
let text2 = 'dolor sit amet';

console.log( text1 + ' ' + text2); 

// 4. Выведите фразу из предыдущего задания в консоль, используя интерполяцию.

console.log(`${text1} ${text2}`);

// 5. Создайте переменную number и присвойте ей значение 8. 
//    Затем переопределите значение - задайте новое значение 15. Выведите новое значение переменной в консоль.

let number = 8;
number = 15;

console.log(number);

// 6. Создайте переменную sum, которая будет выполнять операцию возведения в квадрат числа 8. Выведите переменную sum в консоль.

number = 8;
let sum = number ** d;
let sum1 = Math.pow(number, d);

console.log(sum);
console.log(sum1);

// 7. Создайте две переменные firstname и lastname. Присвойте им произвольные значения. Выведите в консоль строку в формате ‘Имя Фамилия’

let firstName = 'FirstName';
let lastName = 'LastName';

console.log(`${firstName} ${lastName}`);