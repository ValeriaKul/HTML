// 1. Напишите функцию, которая принимает в качестве аргумента имя (строку), 
//    а возвращает сообщение в формате: Dear ИМЯ, welcome. Выведите результат в консоль. 
//    Запишите функцию в двух форматах (function declaration и arrow function).

    function getGreeting (lastName) {
        return `Dear ${lastName}, welcome.`;
    }
    console.log(getGreeting('Valeriia'));

    let getGreeting_arrow = (lastName) => `Dear ${lastName}, welcome.`;
    console.log(getGreeting_arrow('Valeriia'));

// 2. Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. 
//    Если переданный возраст меньше 18, то функция возвращает сообщение в формате: 
//    Dear ИМЯ, you are younger than 18. 
//    Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult. 
//    Запишите функцию в двух форматах (function declaration и arrow function).
      
    function getGreeting1 (lastName, age) {
        if (age < 18) {
            return `Dear ${lastName}, you are younger than 18!`
        } else {
            return `Dear ${lastName}, you are adult.`
        }
    }
    console.log(getGreeting1('Nataly', 17));

    let getGreeting1_arrow = (lastName, age) => {
        if (age < 18) {
            return `Dear ${lastName}, you are younger than 18!`
        } else {
            return `Dear ${lastName}, you are adult.`
        } 
    }
    console.log(getGreeting1_arrow('Olga', 28));

// 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения. 
//    Значение второго аргумента должно быть указано по умолчанию 2. 
//    Запишите функцию в двух форматах (function declaration и arrow function).

    function getMultiply (number1, number2 = 2) {
        return number1 * number2;
    }
    console.log(getMultiply(5));

    let getMultiply_arrow = (number1, number2 = 2) => number1 * number2;
    console.log(getMultiply_arrow(5));

// 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение. 
//    Выведите результат в консоль. Предложите два варианта решения. 
//    Запишите функцию в двух форматах (function declaration и arrow function).
    function getMin (number1, number2) {
        return Math.min(number1, number2);
    }

    let getMin_arrow = (number1, number2) => Math.min(number1, number2);