// 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '. 
//    Выведите переменную user в консоль, но без лишних пробелов по краям.
let user = '    Ivan Ivanov    ';
console.log(user.trim());
// 2. Напишите программу, которая выводит в консоль рандомное/случайное число 
//    от 0 до 1 и округляет его до третьего знака после точки. 
//    Воспользуйтесь методом toFixed().
let number = Math.random();
console.log(+number.toFixed(3));

// 3. Выведите на экран первую и последнюю буквы предложения, записанного в константу text 
//    (текст строки произвольный), в следующем формате:
//    First: <первая буква строки>
//    Last: <последняя буква строки>
let text = 'Hello World';
console.log(`First: ${text[0]}\n Last: ${text[text.length-1]}`);         // \n - пишет с новой строки
