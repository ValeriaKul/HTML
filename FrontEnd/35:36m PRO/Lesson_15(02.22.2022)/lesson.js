let user = {};
let test = { test: 1 };
let test1 = { test1: 2 };
let test2 = { test2: 3 };
let test3 = { test3: 4 };

Object.assign(user, test, test1, test2, test3);
// console.log(user);

let clone = Object.assign({}, user);

// Вложеное клонирование

let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

// console.log(user2.sizes.height); // 182

// .cloneDeep(obj)

// Методы объектов:
//Object.keys, values, entries

let userKeysArray = Object.keys(user2); // ['name', 'sizes']

let userValuesArray = Object.values(user2); //['John', {…}]

let userEntriesArray = Object.entries(user2); //['John', {…}]
let userEntriesArray2 = entries2(user2);
//[Array(2), Array(2)]
// (2) ['name', 'John']
// (2) ['sizes', {…}]

let someObj = makeNewUser(userEntriesArray);

function makeNewUser(userArray) {
  let userObj = {};
  userArray.forEach(function (item) {
    userObj[item[0]] = item[1];
  });
  return userObj;
}

function entries2(object) {
  let array = [];
  for (const key in object) {
    let newArray = [];
    newArray.push(key);
    newArray.push(object[key]);
    array.push(newArray);
  }
  return array;
}

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА

let options = {
  title: "Menu",
  height: 200,
  width: 100,
};

let { title, ...rest } = options;

let employee = { Коля: "1000", Вася: "500", Петя: "200" };
for (const key in employee) {
  const num = +employee[key];
  if (key !== "Вася") {
    // console.log(num);
  }
}

let week = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function getKey(value, object) {
  for (const key in object) {
    if (object[key] === value) return key;
  }
  return "Value not find";
}

// console.log(getKey("Monday", week));

function getValue(propName, object) {
  for (const key in object) {
    if (key === propName) {
      return object[propName];
    }
  }
  return "Key not find";
}
// console.log(getValue("5", week));

let getObject = {
  getValue: (propName, object) => {
    for (const key in object) {
      if (key === propName) {
        return object[propName];
      }
    }
    return "Key not find";
  },
  getKey: (value, object) => {
    for (const key in object) {
      if (object[key] === value) return key;
    }
    return "Value not find";
  },
};

// console.log(getObject.getValue("Monday", week));
// console.log(getObject.getKey("2", week));

let employees = {
  Nikolay: 1500,
  Vasiliy: 2000,
  Svetlana: 2500,
  Ivan: 1000,
  Department: "Development",
};

function getSalaryInfo(object) {
  let sum = getSum(object);
  let maxSalary = getMaxSalary(object);
  let minSalary = getMinSalary(object, maxSalary);
  return { sum, maxSalary, minSalary };
}

// console.log(getSalaryInfo(employees));

function getSum(object) {
  let sum = 0;
  for (const key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }
  return sum;
}

function getMinSalary(object, maxSalary) {
  let minSalary = maxSalary;
  for (const key in object) {
    if (typeof object[key] === "number") {
      if (minSalary > object[key]) {
        minSalary = object[key];
      }
    }
  }
  return minSalary;
}

function getMaxSalary(object) {
  let maxSalary = 0;
  for (const key in object) {
    if (typeof object[key] === "number") {
      if (maxSalary < object[key]) {
        maxSalary = object[key];
      }
    }
  }
  return maxSalary;
}

// console.log(getSalaryInfo(employees));

//Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом

const data = { a: 1 };

let isPlainObject = (data) =>
  typeof data === "object" && !Array.isArray(data) && data !== null;

// console.log(isPlainObject(data)); // true

// Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`

let makeArrayFromObject = (object) => {
  let array = [];
  for (const key in object) {
    let newArray = [];
    newArray.push(key);
    newArray.push(object[key]);
    array.push(newArray);
  }
  return array;
};

// console.log(makeArrayFromObject(data));

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

console.log(without({ a: 1, b: 2, c: 3, d: 4 }, ["b", "c", "a"]));

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

console.log(without2(week, "2", "3"));
