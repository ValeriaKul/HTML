// Task_1

class Language {
    constructor (name, alphabet, country) {
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }
get_info() {
    console.log(`Язык: ${this.alphabet}, алфавит: ${this.alphabet}. Страна, в которой говорят на этом языке - ${this.country}.`);
}
}

const language_1 = new Language('German', 'latin', 'Germany');
const language_2 = new Language('Russian', 'cyrillic', 'Russia');

// language_1.get_info();
// language_2.get_info();

class Worker {
    constructor (name, surname, rate, days, salary) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days; 
        //this.salary = rate * days;     
    }

    getSalary() {
        console.log(`Salary: ${this.rate * this.days}.`);
    }

    addDays(amount) {
        return this.days += amount;
    }

    deleteDays(amount) {
        return  this.days -= amount;
    }
}

const worker_1 = new Worker('Ivan', 'Petrov', 1500, 10);
const worker_2 = new Worker('Petr', 'Ivanov', 1000, 20);
const worker_3 = new Worker('Igor', 'Alexandrovich', 2500, 15);

// worker_1.getSalary();
// worker_2.getSalary();
// worker_3.getSalary();




