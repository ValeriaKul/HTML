/* First level: 
Сравнить две константы двумя разными способами: 
- Создать две константы, присвоив одной значение строкового типа, а второй числового
- Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
в одном случае ( == ) он был true, а в другом ( === ) false */

const firstConst = 100;
const secondConst = '100';
const result = true;
firstConst == secondConst ? console.log(true) : console.log(false);
firstConst === secondConst ? console.log(true) : console.log(false);

/* Second level: 
Реализовать решение задачи в JS: 
- У нас есть 100 (создать константу)
- Цена помидоров на рынке - 10 (создать константу)
- Цена огурцов на рынке - 5 (создать константу)
- Цена яблок на рынке - 15 (создать константу)
- Оставшиеся деньги потратим на орехи (создать переменную)
- Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
- оставшиеся деньги потратили на орехи (присвоить значение переменной)
- сколько денег мы потратили на орехи? (вывести переменную в консоль)
- на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)
- в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи' */

const sumTotal = 100;
const tomatoPrice = 10;
const cucumberPrice = 5;
const applePrice = 15;
let nutsTotalPrice;
const purchasesTotalWithoutNuts = (tomatoPrice + cucumberPrice + applePrice) * 2;
nutsTotalPrice = sumTotal - purchasesTotalWithoutNuts;
console.log(`На орехи потрачено ${nutsTotalPrice}.`);
nutsTotalPrice > purchasesTotalWithoutNuts ? console.log(true) : console.log(false);
nutsTotalPrice > purchasesTotalWithoutNuts ? console.log('Больше потратили на орехи') : console.log('Больше потратили на фрукты и овощи');



