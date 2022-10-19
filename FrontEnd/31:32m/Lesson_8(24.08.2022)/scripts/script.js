let newArray = [200, 300, 134, 43, 23, 679, 55];
let users = ['Ivan', 'Olga', 'Sergey', 'Stanislav', 'Valeriia'];
let age = [23, 15, 18, 56, 43, 28];

let newArray2 = newArray.filter(el => el < 100);

let newUsers = users.filter(el => el.length >= 5);

let newArray3 = newArray.filter(el => el %2 === 0 && el !== 0);

let newArray4 = newArray.filter(el => el % 10 === 5);

let newArray5 = newArray.map(el => el * 2).map(el => el = 100);

let newArray6 = newArray.map(el => {
    if (el >= 100)  {
       return el = '>100';
    } 
    return el ='<100';
});

let newArray7 = newArray.map(el => el >= 100 ? '>100' : '<100');

let newAge = age.map(el => {
    if (el < 18) {
        return el = 'child';
    }
    return el = 'adult';
});

let newAge2 = age.map(el => el < 18 ? 'child' : 'adult');

let newAge3 = age.map(el => el % 10);

// console.log(newAge3);