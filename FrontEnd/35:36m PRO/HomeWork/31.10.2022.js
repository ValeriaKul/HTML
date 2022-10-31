//================TASK 1===================
/*Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта. */
let user = {
  name: "John",
  age: 30,
};

function count(object) {
  let count = 0;
  for (key in object) {
    count += 1;
  }
  if (count < 1) {
    return null;
  }
  return count;
}
console.log(`Количество свойств в объекте: ${count(user)}.`);

//================TASK 2===================
/* Максимальная зарплата
У нас есть объект salaries с зарплатами
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(object, callback) {
  if (callback(object) !== null) {
    let maxSalary = 0;
    let name = "";
    for (const key in object) {
      if (object[key] > maxSalary) {
        maxSalary = object[key];
        name = key;
      }
    }
    return name;
  } else {
    return null;
  }
}

console.log(topSalary(salaries, count));
