
// let arr = ['a','b','c','d','e','f','g','h','i','j'];

// let arrayToString = array => {
// let concat;
//     for (let i = 0; i < array.length -1; i++) {
//         if (i % 2 == 0){
//         concat = `${array[i]} + ${array[i+1]}`;
//         console.log(concat);
//         }
//     }
// return concat;
// };
// arrayToString(arr);


/* let strArr = ['a','b','c','d','b','c','d','b','c','d'];

let even = num => num%2==0;
let multThree = num => num%3==0;

let arrToStrConcat = function(arr){
    let str = '';
    
    for(let i = 0; i<arr.length;i++){
        const element = arr[i];

        

        if(even(i+1)){
            str+=`${element}, `;
        }else{
            str+=element;
        }
    }
    
    return str;

}

console.log(arrToStrConcat(strArr)); */

// =======================================

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let arrayInt = [2, 5, 3, 9, 2, 5, 3, 9];
let result = 0;
for (let i = 0; i < arrayInt.length; i++) {
    if (i % 2 == 0) {
        result = result + (arrayInt[i] * arrayInt[i+1])
    }
}
// console.log(result);

// let upgradeArray = array = el => {
//     if (array.indexOf(el) % 2 == 0) {
//         console.log(array.indexOf(el));
//         arrayInt.reduce((total, el) => total + el)
//     }
// }
// ;
// console.log('Upgrade ' + upgradeArray(arrayInt));

// =======================================

// В переменной date лежит дата в формате '2025-12-31'. 
// Преобразуйте эту дату в формат '31/12/2025'.
// 1й вариант:
let date = '2025-12-31';
let array = date.split('-');
let stringDate = `${array[2]}/${array[1]}/${array[0]}`;

// 2й вариант:
function formatDate (date) {
    let array = date.split('-');
    array.reverse();
    let stringDateUpdate = array.join('/');
    return stringDateUpdate;
}
// console.log(formatDate(date));
// 3й вариант: 
let formatDate2 = date => date
        .split('-')
        .reverse()
        .join('/');
// console.log(formatDate2(date));

function formatDateAndUpdate (dateString, yearUpd, monthUpd, dayUpd) {
    let reversedArrayDay = dateString.split('-').reverse(); 
    
    
}

//========================================

// Дана переменная str, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, 
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
// В противном случае в переменную result запишем содержимое переменной str.
let cutString = function(string, maxSymbol) {
    if (string.length < maxSymbol) {
        return string;
    } 
    return  string.slice(0, maxSymbol)+ '...';
}
// console.log(cutString('Hello world', 6));
// console.log(cutString('Hello world', 20));



