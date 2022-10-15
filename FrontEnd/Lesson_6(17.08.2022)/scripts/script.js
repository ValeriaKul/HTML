/* let getChair = (text) => {
    for (let i = 0; i <= text.length -1; i++) {
        console.log(text[i]);
    }
} */
// getChair('Hello');
let str = 'Valeriia';
let array = ['hello', 5, true, false, 23, 'bye', str];
// console.log(array);

let getLength = () => array[array.length-1].length
// console.log(getLength(array));

let getArrayLength = (arrayString) => {
    if (arrayString.length == 0) {
        return null;
    }
    let elementLengthMax = arrayString[0].length;
    let positionInArray = 0;
    for (let i = 1; i < arrayString.length; i++) {
        
        if (arrayString[i].length > elementLengthMax) {
            elementLengthMax = arrayString[i].length;
            positionInArray = i;
        }
    }
    console.log(arrayString[positionInArray]);
}
let arrayString2 = ['hello', 'my', 'name', 'is', 'Valeriia'];
// getArrayLength(arrayString2); 
let arrayString3 = [];
// console.log(getArrayLength(arrayString3)); 

