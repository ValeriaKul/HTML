let user = {
    name: 'Анатолий',
    lastname: 'Ушанов',
    age: 29,
    salsary: 130000,
}
// console.log(user);
// console.log(user.lastname);     //вызов элемента объекта 
// console.log(user['lastname']);  //вызов элемента объекта 
user['lastname'] = 'Куликов';   //изменение данных в объекте
user.id = 1;                    //добавили новое свойство в объект
delete user.id;                 //удалили свойство из объекта
// console.log(user);

//создать объект со свойствами id, title , price
let object = {
    id: 1,
    title: 'MacBook',
    price: 2000,
}
//увеличить стоимость на 20%
object.price *= 1.2;
//добавить свойство description c каким-то описанием
object.description = 'Good choise!'
//вывести объект в консоль
// console.log(object);

const products = [
{
    id: 1,
    title: 'bike',
    price: 55000
},
{
    id: 2,
    title: 'rollers',
    price: 15000
},
{
    id: 3,
    title: 'skate',
    price: 10000
}
];
// console.log(products);

//используя forEach вывести каждый объект отдельно
// products.forEach(el => console.log(el));

//используя forEach вывести только названия продуктов
// products.forEach(el => console.log(el.title));

//сформировать массив который состоит только из тех товаров, цена которых больше 12000
let array = products.filter(el => el.price >= 12000);
let array2 = products.filter(el => el.price >= 12000)
                     .map(el => el.title);

//найти общую сумму прайса
let sum = products.reduce((prev, value) => prev + value.price, 0);
// console.log(sum);

const customers = [
    {
        id: 1,
        name: 'Maxim',
        orders: [10000, 23000, 19000]
    },
    {
        id: 2,
        name: 'Oleg',
        orders: [12000, 43000, 9000]
    },
    {
        id: 3,
        name: 'Olga',
        orders: [22000, 44000, 6000]
    },
    {
        id: 4,
        name: 'Semen',
        orders: [32000, 65000, 11000]
    }
];
// console.log(customers);
//реализовать новый массив, в котором будут поля id, name, order_total
let newArray = customers.map(el => {
    return {
        id: el.id,
        name: el.name,
        order_total: el.orders.reduce((prev, value) => prev + value)
    }
});
// console.log(newArray);



