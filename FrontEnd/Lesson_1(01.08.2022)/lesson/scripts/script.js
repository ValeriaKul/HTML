console.log('Hello world!');
// alert ('Hello world!');
let a = 7; //number
a = 100;
let b = 12; //number
console.log(a);
console.log(b);
const c = 'Приветствие через конкатинацию:'; //string
// console.log(c);
let greeting = 'Hello';
let firstName = 'Valeriia';
console.log(c + ' ' + greeting +' '+ firstName); //конкатинация
console.log(`Приветствие через интерполяцию: ${greeting} ${firstName}`) //интерполяция

console.log(typeof a);
console.log(typeof b);
console.log(typeof (c));

let object = {
    firstName: 'Nelli',
    age: 27
}

console.log(typeof object);

let number = '77'; //string
let number2 = +'77'; //number

console.log(typeof number);
console.log(typeof number2);