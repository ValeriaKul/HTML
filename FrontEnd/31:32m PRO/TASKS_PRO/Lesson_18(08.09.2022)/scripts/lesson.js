
class User {

    static roles = ['root', 'admin', 'manager', 'user'];

    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        User.roles.includes(role) ? this.role = role : this.role = undefined;
    }

sayHi () {
    console.log(`Hello ${this.name}. You are ${this.age} years old!`);
}

changeName(newName) {
    this.name = newName;
}

b_day(){
    this.age ++;
    console.log(`Happy B-Day, ${this.name}!`);
}

changeRole (newRole){
    User.roles.includes(newRole) ? this.role = newRole : this.role = undefined;
}
}

const user_1 = new User('Olga', 30, 'admin');
const user_2 = new User('Olga', 30, 'worker');
user_1.sayHi();