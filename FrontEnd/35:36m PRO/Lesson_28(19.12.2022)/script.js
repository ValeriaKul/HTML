class Dog {
  constructor(name) {
    this.name = name;
  }
  hi() {
    console.log("hi " + this.name);
  }
}
//! this - ссылка на объект, у которого вызываем метод
const dog_1 = new Dog("Bobik");
const dog_2 = new Dog("Sharik");

//todo: Создать класс User со свойствами name, username, age.
//todo: Добавить метод b_day которое увеличивает возраст на единицу.
//todo: Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его.

class User {
    static _roles = ['manager', 'admin', 'guest', 'root'];
    static add_role(newRole) {
        this._roles.push(newRole);
    }
   

  constructor(name, username, age, role = 'guest') {
    this.name = name;
    this.username = username;
    this.age = +age;

    if (User._roles.includes(role)) {
        this.role = role;
    } else {
        this.role = null;
    }
  }
  hi() {
    const { name, username } = this;
    console.log(`Hi ${name}! Username: ${username}`);
  }
  b_day() {
    this.age += 1;
  }
  change_name(newName) {
    this.name = newName;
  }
  change_role(role) {
    if(this._roles.includes(role)) {
        this.role = role;
    } else {
        this.role = null;
    }
  }
}
const user_1 = new User("Valeriia", "Meow", "31");
const user_2 = new User("Stanislav", "Jag", "52");
console.log(user_1);
User.add_role('superuser');


//todo 1: Создать класс Product со свойствами title, price, count. И методами change_price и sale.
//todo 2: Доработать метод change_price, чтобы цена менялась только в случае, если указанная новая цена больше 0
//todo 3: Ecли count == 0, вывести в консоль "товар закончился"
//todo 4: Добавить свойство income, которая хранит число прибыли с продаж. При каждой успешной продаже свойства income должно увеличиваться на цену товара

class Product {
  constructor(title, price, count) {
    
    this.title = title, 
    this.price = price, 
    this.count = count,
    this.income = 0;
  }
  change_price(newPrice) {
    if (newPrice > 0) {
      this.price = newPrice;
    } else {
      console.log("New price < 0");
    }
  }
  sale() {
    if (this.count === 0) {
      this.count = 0;
      console.log("товар закончился");
    } else {
      this.count--;
      this.income += this.price
    }
  }
}

const bike = new Product("bike", 25000, 14);
bike.sale();
bike.change_price(55000);
console.log(bike);
