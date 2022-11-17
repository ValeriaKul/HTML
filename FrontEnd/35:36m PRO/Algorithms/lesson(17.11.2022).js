// 1. Создать функцию solve, которая принимает 4 аргумента:
//      int n (количество дисков в начале исполнения)
//      int fromRod (стержень, с которого снимается диск)
//      int toRod (стержень, на который должен быть положен жиск в итоге)
//      int additionalRoad (вспомогательный стержень)
// 2. В функции сделать проверку n === 1, если она выполняется, вывести, 
//      с какого стержня переносится диск и на какой и сделать return
// 3. Вызвать solve, поменяв местами toRod и additionalRoad и уменьшить n на 1
// 4. Вывести номер диска, который мы переносим (n) и стержни, с которого мы переносим
//    на который мы переносим и вспомогательный
// 5. Вызвать solve, поменяв местами fromRod и additionalRoad и уменьшить n на 1
// 6. Вызвать solve с аргументами (3, 1, 3, 2)

let n;
let fromRod;
let toRod;
let additionalRoad;

solve(3, 1, 3, 2);

function solve(n, fromRod, toRod, additionalRoad) {
    if (n === 1) {
        console.log(`Перенсти диск 1 с ${fromRod} на ${toRod}`);
        return;
    } else {
        solve (n-1, fromRod, additionalRoad, toRod);
        console.log(`Перенсти диск ${n} с ${fromRod} на ${toRod}`);
        solve (n-1, additionalRoad, toRod, fromRod);
    }
}

// Get max element in array
// Найти максимальный элемент в заданном массиве
// Ввод: {40, 250, 80, 88, 240, 12, 148}
// Вывод:
// min - 12
// max - 250

let arr = [40, 250, 80, 88, 240, 12, 148]

let min = findMinDefault(arr);
let max = findMaxDefault(arr);

function findMinDefault(arr) {

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
    }
    return min;
}

function findMaxDefault(arr) {
    
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } 
    }
    return max;
}

function findMin (arr, index) {

     let min;

     if (arr.length > index) {
        min = findMin (arr, index + 1);
        if (arr[index] < min) {
            return arr[index];
        }
        return min;
     }
    return arr[index-1];
    }

const min2 = findMin(arr, 0);
console.log(min2);


function findMax (arr, index) {

    if (arr.length > index) {
       let max = findMax (arr, index + 1);
       if (arr[index] > max) {
           return arr[index];
       }
       return max;
    }
   return arr[index-1];
   }

const max2 = findMin(arr, 0);
console.log(max2);



function findMin(arr, index) {
    if (arr.length > index) {
        let min = findMin(arr, index + 1);

        if (arr[index] < min) {
            return arr[index];
        }
        return min;
    }

    return arr[index - 1];
}

function findMax(arr, index) {
    if (arr.length > index) {
        let max = findMax(arr, index + 1);

        if (arr[index] > max) {
            return arr[index];
        }
        return max;
    }

    return arr[index - 1];
}


