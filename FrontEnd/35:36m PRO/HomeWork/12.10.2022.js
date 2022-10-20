/*First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).
Количество символов в строке можно узнать применив к строке свойство length через точку. 
если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.
если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.
если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'

Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение и как стрелочную функцию.

Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее. */

const dataType = value => {
    if (typeof value == 'string') {
        return console.log(value.length);
    } else if (typeof value == 'number' || typeof value == 'boolean') {
        return console.log(String(value).length);
    } else {
        return console.log('Wrong data type');
    }
}
// dataType('hello');
// dataType(123);
// dataType(false);
// dataType([]);
// dataType({});

function dataType2(value) {
    if (typeof value == 'string') {
        return console.log(value.length);
    } else if (typeof value == 'number' || typeof value == 'boolean') {
        return console.log(String(value).length);
    } else {
        return console.log('Wrong data type');
    }
}

let dataType3 = function (value) {
    if (typeof value == 'string') {
        return console.log(value.length);
    } else if (typeof value == 'number' || typeof value == 'boolean') {
        return console.log(String(value).length);
    } else {
        return console.log('Wrong data type');
    }
}


// в контексте данной домашней работы более предпочтительна вообще стрелочная функция, потому что она:
// 1. современная
// 2. ее можно написать в одну строчку без "return" если есть всего одно условие, код становится более читабельным и понятным
// 3. удобна при пользовании методов

