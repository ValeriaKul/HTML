// Реализуйте класс Group (групп), который будет иметь следующие свойства:
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
    constructor(name, major, number){
        this.name = name;
        this.major = major;
        this.number = 15;
    }

addStudent() {
    this.number ++;
}

deleteStudent() {
    this.number --;
}
}

const group_1 = new Group('BackEnd', 'java');
const group_2 = new Group('FrontEnd', 'JS');

// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

let groupArray = [];
const ceateGroup = (name, major, number) => groupArray.push(new Group(name, major, number)) ;

ceateGroup('31/32', 'java');
ceateGroup('35/36', 'js');
ceateGroup('26/27', 'C++', 28);

console.log(groupArray);