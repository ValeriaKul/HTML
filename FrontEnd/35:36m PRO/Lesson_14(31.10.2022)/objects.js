// Объекты - ассоциативные массивы с рядом дополнительных возможностей
// Они хранят свойства (пары Ключ - Значение), где
// Ключи свойств должны быть строками
// Значения могут быть любого типа
// ====================================================================
// Создание объектов:
let user = {};

// Литералы и свойства:
let object = {
  // object
  name: "John", // под ключом "name" хранится значение John
  age: 30, // под ключом "age" хранится значение 30
};
// Получить значение из свойства объекта можно через точку по ключу:
object.age; // 30
object.name; // John
object["name"]; // John

//Добавление свойств:
object.isAdmin = true; // {name: 'John', age: 30, isAdmin: true}

// Удаление свойств:
delete object.age; // {name: 'John', isAdmin: true}

// Объект, объявленный как const, может быть изменен, потому что меняется не сам объект, а его свойство
const user2 = {
  name: "John",
};
user2.name = "Pete";

// Так же ключам можно задавать значение через []
let fruit = "apple";
let bagOfFruits = {
  [fruit]: 5, // имя переменной будет взято из переменной fruit
};
bagOfFruits.apple; // 5
bagOfFruits["apple"]; // 5
bagOfFruits[fruit]; // 5

// Ключ может вычисляться динамически
let bag = {
  [fruit + "Computers"]: 5,
};
bag.appleComputers; // 5

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user_1 = makeUser("John", 30);
let user_2 = makeUser("Alex", 29);
let user_3 = makeUser("Vlad", 31);

// Специальный синтаксис JS для создания объектов
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

// Ограничения на имена свойств
// Имя переменной не может совпадать с зарезервированными словами, например for/let/return и т.д.
// Но для свойств объекта такого ограничения нет:

let obj = {
  for: 1, // 1
  let: 2, // 2
  return: 3, // 3
};

// Обращение к несуществующему свойству
let user_4 = {
  age: 25,
};
// user_4.noSuchProperty === undefined ? true (свойства нет) : false (свойство есть)

// Проверка существования свойства, оператор in
let user_5 = {
  name: "John",
  age: 30,
};
// console.log("age" in user_5); // true
// console.log("blabla" in user_5); // false

// Перебор объекта

for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

for (let key in user_5) {
  // Пока есть ключи в объекте
  // ключи
//   console.log(key); // "name", "age"
  // значения ключей
//   console.log(user[key]); // 'John', 30
}

// Все конструкции 'for' позволяют нам объявлять переменную внутри цикла

//=================================================================
// В JS есть много других типов объектов:
// Аrray  для хранения упорядоченных коллекций данных
// Date  для хранения информации о дате и времени

//==========ЗАДАЧА 1============

/*Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let object_1 = {};
object_1.name = "John";
object_1.surName = "Smith";
object_1.name = "Pete";
delete object_1.name;

//==========ЗАДАЧА 2============
/* Написать функцию, которая будет проверять на пустоту */

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

let isEmptyArrow = (object) => {
  for (const key in object) {
    return false;
  }
  return true;
};

//==========ЗАДАЧА 3============
/* Сохранить функцию и ее результат в объект */
let helpers = {
  isEmpty: function () {},
};

let helpers2 = {
    isEmpty: (object) => {
        for (const key in object) {
            return false;
          }
          return true;
    },
  };

//=================================================================

// Object.assign(dest, [src1, src2, src3])

let users = {};
let test1 = { test: '1'};
let test2 = { test: '2'};
let test3 = { test: '3'};
let test4 = { test: '4'};
Object.assign(user, test1, test2, test3, test4);
console.log(test2);
let newArray = Array.from(test1)
console.log(newArray);

console.log(Array.from('foo'));
