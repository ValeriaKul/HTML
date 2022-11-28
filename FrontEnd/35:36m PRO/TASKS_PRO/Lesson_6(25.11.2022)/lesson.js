const customers = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Iusupov",
  },
  {
    id: 2,
    firstName: "Oleg",
    lastName: "Petrov",
  },
  {
    id: 3,
    firstName: "Nazar",
    lastName: "Ivanov",
  },
  {
    id: 4,
    firstName: "Andrey",
    lastName: "Tarasov",
  },
  {
    id: 5,
    firstName: "Nikolai",
    lastName: "Andreev",
  },
  {
    id: 6,
    firstName: "Olga",
    lastName: "Petrenko",
  },
  {
    id: 7,
    firstName: "Anna",
    lastName: "Androsova",
  },
];

const orders = [
  {
    id: 1,
    customerId: 3,
    date: "02/03/2022",
    delivered: true,
    products: [
      { productId: 567, price: 2000 },
      { productId: 789, price: 3000 },
    ],
  },
  {
    id: 2,
    customerId: 5,
    date: "05/08/2022",
    delivered: false,
    products: [
      { productId: 413, price: 2500 },
      { productId: 214, price: 1000 },
    ],
  },
  {
    id: 3,
    customerId: 1,
    date: "10/07/2022",
    delivered: true,
    products: [
      { productId: 500, price: 1500 },
      { productId: 213, price: 1500 },
    ],
  },
  {
    id: 4,
    customerId: 6,
    date: "10/08/2022",
    delivered: false,
    products: [
      { productId: 912, price: 1000 },
      { productId: 467, price: 500 },
    ],
  },
  {
    id: 5,
    customerId: 4,
    date: "09/12/2022",
    delivered: true,
    products: [
      { productId: 890, price: 5000 },
      { productId: 467, price: 500 },
    ],
  },
  {
    id: 6,
    customerId: 2,
    date: "01/03/2022",
    delivered: false,
    products: [
      { productId: 567, price: 4500 },
      { productId: 301, price: 2500 },
    ],
  },
  {
    id: 7,
    customerId: 5,
    date: "12/04/2022",
    delivered: true,
    products: [
      { productId: 231, price: 3700 },
      { productId: 200, price: 500 },
    ],
  },
  {
    id: 8,
    customerId: 7,
    date: "05/09/2022",
    delivered: true,
    products: [
      { productId: 600, price: 3000 },
      { productId: 120, price: 500 },
    ],
  },
];

//todo: Вернуть список продуктов(массив объектов), которые заказал Пользователь.

function getProduct( name, lastName) {
  let idCustomer = customers.find(
    (customer) => customer.firstName == name && customer.lastName == lastName
  ).id;
  let order = orders.find((order) => order.customerId === idCustomer).products;
  return order;
}

console.log(getProduct("Nazar", "Ivanov"));
