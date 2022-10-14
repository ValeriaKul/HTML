function getDiv (number1, number2) {
    if (number1 > number2) {
        return number1 / number2;
    } else {
        return number2 / number1
    }
}

function getDiv2 (number1, number2) {
    return Math.max (number1,number2) / Math.min (number1, number2);
}

let greeting = function getHello (name, lastName) {
    return `Hello ${name} ${lastName}!`;
}
// console.log(greeting('Olga', 'Petrova'));
//СТРЕЛОЧНАЯ ФУНКЦИЯ (arrow function)
let greeting_arrow = (name, lastName) => {
    return `Hello ${name} ${lastName}!`;
}
// console.log(greeting_arrow('Olga', 'Petrova'));

let greeting_arrow2 = (name, lastName) => `Hello ${name} ${lastName}!`;
// console.log(greeting_arrow2('Olga', 'Petrova'));