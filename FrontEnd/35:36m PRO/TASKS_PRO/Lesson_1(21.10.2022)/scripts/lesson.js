// console.log('hello world');  выводит на консоль
// alert('Hello');
// let getName = prompt('Как Вас зовут?');
// alert(`Hello ${getName}!`);

// let getName = prompt('Как Вас зовут?');
// let name = getName[0].toUpperCase() + getName.slice(1);
// alert(`Hello ${name}`);

// let array = ['Ivan', 'Andrey', 'Anna', 'Veronika'];
// let name = 'Olga';
// // console.log(array);

// let nums = [2, 4, 6, 8] // Добавить в массив 10
// let newArr = nums.concat(10) 
// console.log(nums)
// console.log(newArr)

// let array = ['Ivan', 'Andrey', 'Anna', 'Veronika'];
// let newName = prompt(`Какое имя вы хотите добавить?`);

// function checkName(name){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() == name.toLowerCase()) {
//             return alert(`Такое имя существует`);
//         }
//     }
//     array.push(name);
// }
// console.log(array);
// checkName(newName);

// function checkNameIncludes (name) {
//     if (array.includes(name)) {
//         return alert(`Такое имя существует`);
//     }
//     array.push(name);
// }

// let array = ['a', 'b', 'c', 'd', 'e']; // удалить буквы в центре массива используя SPLICE() и добавить вместо них 2, 3, 4
// let newArray = array.splice(1, 0, 2, 3, 4);

// console.log(array);

let message = ['Hello!', 'My', 'name', 'is', 'Arsen', '.']; //created an array
let index = +prompt('Какое слово по очереди хотите удалить?' + ' ' + message.join(' ') ) // asked a question
index --;                                                   // - index

let string = prompt('Какое слово вы хотите использовать вместо удаленного?'); // выбор удаления слова

message.splice(index, 1, string);  // замена слова

console.log(message.join(' ')); // вывод нового предложения









