// функция lib позволяет в консоли отображать результат выполнения функции, которую в нее передаем
function lib(callback, a, b) {
    console.log(callback(a, b));
}

function myMap (array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(callback(array[i]));  
    }
    return newArray;
}

function myForEach (array, callback) {
    let newWord = callback(array);
    return newWord;
}