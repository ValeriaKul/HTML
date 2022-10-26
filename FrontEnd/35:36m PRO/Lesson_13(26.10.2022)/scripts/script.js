// function withOutArray(array, ...deleteData) {           // получаем на ходе 2 массива
//     let filteredArray = [...array];                     // клонируем массив
//     deleteData.forEach(                                 // перебор массива deleteData
//         item => {
//             filteredArray = filteredArray.filter(       // фильтруем клон основного массива
//                 el => el !== item);                     // перезапускаем его без текущего символа в итерации deleteData
//         });                                                  
//         return filteredArray;                           // возвращаем массив
//     }

let someArray = ['ttt', 'fff', 555, true, false, undefined, null, 0, 5, 61, 1];
// console.log(someArray);
// console.log(null, 5, 1, false, 555);
// withOutArray(someArray, null, 5, 1, false, 555);

// function withOutArray(array, ...deleteData) {
//     let filteredArray = [...array];
//     for (let i = 0; i < deleteData.length; i++) {
//         filteredArray = filterClone(filteredArray, deleteData[i]);
//     }
//     return filteredArray;
// }

// function filterClone(arr, element) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (element !== arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }


// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
function withOutArray(array, ...deleteData) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(!deleteData.includes(array[i])){
            newArr.push(array[i]);
        }
    }   
    return newArr;
}
console.log(withOutArray(someArray, null, 5, 1, false, 555));

function withOutArray2(array, ...deleteData) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(isNotIncluded(deleteData, array[i])){
            newArr.push(array[i]);
        }
    }   
    return newArr;
}

function isNotIncluded (array, element) {
    let isNotIncluded = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            isNotIncluded = isNotIncluded && false;
        } 
    }
    return isNotIncluded;
}

console.log(withOutArray2(someArray, null, 5, 1, false, 555));