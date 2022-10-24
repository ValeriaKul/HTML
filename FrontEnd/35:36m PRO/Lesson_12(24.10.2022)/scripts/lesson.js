// .find() 

let users = [
    ['Ivan', 'Ivanov'],
    ['Petr', 'petrov'],
    ['Anton', 'Antonov'],
];

let user = users.find (el => el[0] == 'Anton');
console.log(user);