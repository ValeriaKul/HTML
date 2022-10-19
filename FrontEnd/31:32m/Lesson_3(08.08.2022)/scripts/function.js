/* function getSum (num1, num2) {
    return num1 + num2
}

console.log(getSum(1, 2));
console.log(getSum(5, 5));
console.log(getSum(5, 2));

function getSum2 (num1, num2 = 3) {
    return num1 + num2;
}
console.log(getSum2(1, 2));
console.log(getSum2(5));

function getGreeting (firstName = 'Elena') {
    return `Hello, ${firstName}`;
}
console.log(getGreeting('Olga'));
console.log(getGreeting());

function getMultilply (num1, num2, num3 = 1) {
    let result = num1 * num2 * num3
    return result;
}
console.log(getMultilply(1, 2)); */

function getNameAndAge (firstName = 'Elena', age = 18) {
return `Hello, ${firstName}. Your age is ${age}.`;
}
// console.log (getNameAndAge());
// console.log (getNameAndAge('Anton', 22));
// console.log (getNameAndAge('Anna'));

function get_hypotenuse (kat1, kat2) {
    if (kat1 <= 0 || kat2 <=0) {
        return null;
    }
    return Math.sqrt( Math.pow(kat1, 2) + Math.pow(kat2, 2) );
    }

console.log(get_hypotenuse(1, 0));
console.log(get_hypotenuse(0, 1));
