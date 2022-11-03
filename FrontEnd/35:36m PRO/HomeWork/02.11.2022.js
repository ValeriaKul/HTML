/* 1)
Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны, false если объекты разные 
({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 */

let isEqual = (object1, object2) => {
  let isEqual = true;
  for (const key1 in object1) {
    for (const key2 in object2) {
      if (object1[key1] !== object2[key2]) {
        isEqual = false;
      }
    }
  }
  return isEqual;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

/* 2)
Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 */

let intersection = (object1, object2) => {
  let sameObjects = {};
  for (const key1 in object1) {
    for (const key2 in object2) {
      if (key1 === key2) {
        sameObjects[`${key1}`] = object1[key1];
      }
    }
  }
  return sameObjects;
};
const data4 = { a: 1, b: 2 };
const data5 = { c: 1, b: 2 };
console.log(intersection(data4, data5)); // { b: 2 }

//===================ДОРАБОТКА КОДА С УРОКА===================
//===ПОЛУЧАЕМ ДАННЫЕ ИЗ МАСССИВА===
// ({ a: 1, b: 2 }, ['b']) => { a: 1 }

let without = (object, ...deletedProps) => {
  let newObject = {};

  for (const key in object) {
    deletedProps.forEach((el) => {
      if (!el.includes(key)) {
        newObject[key] = object[key];
      }
    });
  }
  return newObject;
};
console.log(without({ a: 1, b: 2, c: 3, d: 4 }, ["b", "c", "a"])); // {d: 4}

//===ПОЛУЧАЕМ ДАННЫЕ НЕ ИЗ МАСССИВА===
// ({ a: 1, b: 2 }, 'b') => { a: 1 }
let without2 = (object, ...deletedProps) => {
  let newobject = {};

  for (let key in object) {
    if (!deletedProps.includes(key)) {
      newobject[key] = object[key];
    }
  }
  return newobject;
};
console.log(without2({ a: 1, b: 2, c: 3, d: 4 }, "a", "b")); // {c: 3, d: 4}
