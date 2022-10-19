const multThree = () => {
    return 3 * 2;
}

const multNumber = (num) => {
    return num * 2;
}
let arr = [1, 2, 3, 4, 5];
const divideNums = (arrayNumbers) => {
    let arrayNumbersResult = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        arrayNumbersResult.push(arrayNumbers[i] / 2);
    }
    return arrayNumbersResult;
}

// console.log(divideNums(arr));

const multiplyNums = (arrayNumbers) => {
    let arrayNumbersResult = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        arrayNumbersResult.push(arrayNumbers[i] * 2);
    }
    return arrayNumbersResult;
}
// функция высшего порядка
const chandeNums = (arrayNumbers, callback) => {
    let arrayNumbersResult = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        arrayNumbersResult.push(callback(arr[i]));
    }
    return arrayNumbersResult;
}

const divide = (num) => num / 2;
const mult = (num) => num * 2;
let array = [1, 2, 3, 4, 5];
console.log(chandeNums(array, divide));