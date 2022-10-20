
let object = {
    firstName: 'Nelli',
    lastName: 'Efremyan',
    age: 27,
    active: true
}

// console.log(object); // {firstName: 'Nelli', lastName: 'Efremyan', age: 27, active: true}

// 2 варианта вызова элементов объекта в консоль/обращения к элементам объекта:

// чаще всего используемый метод: 

//console.log (`Hello ${object.firstName}! You are ${object.age} years old!`)

//console.log (`Hello ${object{'firstName']! You are ${object['age']} years old!`)

// 1. если ключ состоит из 2х и более слов, ключ можно будет записать через 'first name'
// 2. если ключ - это переменная (в переменной ОБЯЗАТЕЛЬНО должно лежать значение в кавычках => '')

const users = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        salary: 500
    },
    {
        first_name: 'Olga',
        last_name: 'Petrova',
        age: 12,
        salary: 250
    },
    {   first_name: 'irina',
        last_name: 'Alexandrova',
        age: 46,
        salary: 1500
    },
    {   first_name: 'Denis',
        last_name: 'Sokolov',
        age: 30,
        salary: 760
    }
];

// метод subString(index A, index B) возвращает данные по индексу от А до В, не включая В

// 1. пройтись по массиву методом ForEach и вывести каждый элемент:
// users.forEach(el => console.log(el));

// 2. пройтись по массиву с объектами циклом forEach и вывести в консоль значения first_name из каждого объекта
// users.forEach(el => console.log(el.first_name));

// 3. Добавить в конец массива объект со следующими значениями:
// {
//     first_name: 'Anton',
//     last_name: 'Gribov',
//     age: 36,
//     salary: 1760
// }
// let user = {
//     first_name: 'Anton',
//     last_name: 'Gribov',
//     age: 36,
//     salary: 1760
// };


// users.push(user);

// users.forEach(el => console.log(el));

users.push({
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
});

// users.forEach(el => console.log(el));

// 4. Сформируйте массив из совершеннолетних пользователей

let newUsers = users.filter(el => el.age >= 18);
// console.log(newUsers);

// 5. Получить из всех объектов last_name и сформировать из этих фамилий массив

let newUsers2 = users.map(el => el.last_name );
// console.log(newUsers2);

// 6. Получить из всех объектов first_name и last_name 
let newUsers3 = users.map(el => `${el.first_name} ${el.last_name}` );
// console.log(newUsers3);

// 7. Получить из массива объект, где first_name == 'Olga', и сохраните это в какой-нибудь переменной
let objectOlga = users.find(el => el.first_name === 'Olga');
// console.log(objectOlga);
// метод .find() возвращает первое совпадение по ключу, поэтому условие надо задавать соответстующее

// 8. Сформирровать массив со всеми пользователями, чьи имена начинаются с буквы I/i
let newUsers4 = users.filter (el => el.first_name[0] === 'i' || el.first_name[0] === 'I');
let newUsers4_1 = users.filter (el => el.first_name[0].toLocaleLowerCase === 'i');
// console.log(newUsers4);

// 9. Сформируйте массив из совершеннолетних пользователей и выведите в консоль результат в формате:
// <first_name> <last_name> (<age>): <salary>.
// => ['Ivan Ivanov (20): 500.', '...'];
let newUsers5 = users.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`);
console.log(newUsers5);








