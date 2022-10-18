//============18================
function handler (array) {
    let newArray = array.map(el => el = Math.abs(el));
      return newArray;
    }

let arr1 = [12, 4, 54, 3, 4];
let arr2 = [1, 1, 1, 1, 1, 1, 1];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [];
console.log(handler(arr1));
console.log(handler(arr2));
console.log(handler(arr3));
console.log(handler(arr4));

//============19================
