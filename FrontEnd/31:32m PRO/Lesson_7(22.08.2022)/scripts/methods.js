let age = [10, 45, 53, 23, 12, 7];

for (let i = 0; i < age.length; i++) {
    if (age[i] >= 18) {
      //  console.log(age[i]);
    }
}

let arrayAge = [12, 13, 14, 15];

arrayAge.forEach(element => {
    if (element >= 10) {
       // console.log(element);
     }
    }
    );

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// сформируйте массив с числами меньше 100. 2 способа решения (цикл фор и метод форИч)
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 100) {
        newArray.push(array[i]);
    }
}
console.log('First array(type FOR): ' + newArray);

let newArray2 = [];
array.forEach(element => {
    if (element < 100) {
        newArray2.push(element);
    }
});

console.log('First array(type FOREACH): ' + newArray2);

let newArray3 = [];
for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2 === 0) && (array[i] !== 0)) {
        newArray3.push(array[i]);
    }
}
console.log('Second array(type FOR): ' + newArray3);

let newArray4 = [];
array.forEach(element => {
    if ((element % 2 === 0) && (element !== 0)) {
        newArray4.push(element);
    }
});
console.log('Second array(type FOREACH): ' + newArray4);

let newArray5 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 5) {
        newArray5.push(array[i]);
    }
}
console.log('Third array(type FOR): ' + newArray5);

let newArray6 = [];
array.forEach(element => {
    if (element % 10 === 5 ) {
        newArray6.push(element);
    }
});
console.log('Thirs array(type FOREACH): ' + newArray6);

let newArray7 = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 100)  {
        newArray7.push('>100');
    } else {
        newArray7.push('<100');
    }
}
console.log('Forth array(type FOR): ' + newArray7);

let newArray8 = [];
array.forEach (element => {
    if (element >= 100)  {
        newArray8.push('>100');
    } else {
        newArray8.push('<100');
    }
});
console.log('Forth array(type FOREACH): ' + newArray8);