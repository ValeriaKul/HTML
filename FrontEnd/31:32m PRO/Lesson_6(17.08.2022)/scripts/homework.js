// 1. Напишите цикл for, который выводит числа в консоль от 100 до 130.

let getNums = () => {
    for (let i = 100; i <= 130; i++) {
        console.log(i);
    }
}
// getNums();

// 2. Напишите цикл for, который выводит числа в консоль от 196 до 110 с шагом 3.

let getNums2 = () => {
    for (let i = 196; i >= 110; i -= 3) {
        console.log(i);
    }
}
// getNums2();

// 3. Напишите цикл for, который выводит в консоль нечетные числа от 45 до 35.

let getNums3 = () => {
    for (let i = 45; i>= 35; i--) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
// getNums3();

// 4. В программе заданы две переменные n и m с числовым значением каждая. 
//    Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. 
//    Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

let getNums4 = (n, m) => {
    let even = 0;
    let odd = 0;

    for (let i = Math.min(n, m); i <= Math.max(n, m); i++) {
        if (i % 2 === 0) {
            even += i;
        } 
        if (i % 2 !== 0){
            odd += i;
        }
    }
    console.log(even);
    console.log(odd);
}

// getNums4(4, 10);
// getNums4(10, 4);
// getNums4(5, 5);
// getNums4(6, 6);

// 5. В программе задана переменная n. Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 
//    n и выводит в консоль.

let getSum = n => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    return count;
}
// console.log(getSum(3));
// console.log(getSum(-3));
// console.log(getSum(5));

