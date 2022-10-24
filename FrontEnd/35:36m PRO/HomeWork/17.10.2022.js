/*  1) Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
    Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    2) Написать функцию, принимающую массив чисел и возвращающую сумму всех его положительных элементов и отрицательных 
    чисел отдельно в виде нового массива */

// =============Task_1=============
function camelize (text) {
    let textArray = text.split('');
    console.log(textArray);
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i] == '-') {
                textArray.splice(i, 1);
                textArray[i] = textArray[i].toUpperCase();
            }  
        }   
    let newText =  textArray.join('');
    return newText;
    };

// =============Task_2=============   
function addNumbers (array) {
    let positiveNumber = 0;
    let negativeNumber = 0;
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
            if (array[i] > 0) {
                positiveNumber = positiveNumber + array[i];
            } else {
                negativeNumber = negativeNumber + array[i];
            }
        }
    let newArray = [positiveNumber, negativeNumber];
    return newArray;
    };
// ---------------------------------
function addNumbers2 (array) {
    let positiveNumber = 0;
    let negativeNumber = 0;
        array.forEach(element => {
            element > 0 ? element += positiveNumber : element += negativeNumber;
        });
    return [positiveNumber, negativeNumber];
    };
