let getNumbers = (a, b) => {
    for (let i = a; i >= b; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
// getNumbers(10, 3);

let getSumNumbers = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}

// console.log(getSumNumbers());

let createArray = () => {
    let array = [];
    for (let i = 0; i<= 50; i = i + 5) {
        if (i >= 5) {
        array.push(i);
        }
    }
    // console.log(array);
    return array;
}
createArray();

const createArray2 = (a, b) => {
    let array = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 ===0) {
            array.push(i);
        }
    }
    // console.log(array);
    return array;
}
createArray2(3, 15);

let reverseStringArray = (testArray) => {

    let resultArray = [];

    for (let i = 0; i < testArray.length; i++) {
        resultArray.unshift(testArray[i]);  
    }
    return resultArray;
} 
let arrayString = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
// console.log(reverseStringArray(arrayString));

const reverse = (array) => array.reverse();


