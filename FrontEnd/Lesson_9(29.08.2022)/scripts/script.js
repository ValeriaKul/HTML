let arr = [1, 34, -10, -8, -5, -3];
const negativeNums = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push[i];
        }
    }
    return newArr;
}

// =========================================
// .reduce() - служит для получения 

let numbers = [1, 2, 3, 4, 5];
// for
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// console.log(sum);
//reduce() - принимает обязательно 2 параметра. Если не указать второй параметр, total = array[0].
let result = numbers.reduce((total, el) =>  total + el, 0);
// console.log(result);

//дан массив 
let nums = [3, 6, 7, 1];
let result2 = nums.reduce((total, el) =>  total + el ) / nums.length;
// console.log(result2);

let arrayNumbers = [137, 5, 84, 299, 777, 500, 1, 8, 17];
arrayNumbers.unshift(67);
arrayNumbers.push(56);
// console.log(arrayNumbers);
let newArray2 = arrayNumbers.filter(el => el < 100);
// console.log(newArray2);
let newArray3 = arrayNumbers.filter(el => el % 10 == 7);
// console.log(newArray3);
let count = 0;
let newArray4 = arrayNumbers.filter(el => {
    if (el < 100) {
        count += el;
    }
    return count;
});
// console.log(count);
let count2 = 0;
let newArray5 = arrayNumbers.filter(el => el % 10 == 7).reduce((total, el) => total + el);

