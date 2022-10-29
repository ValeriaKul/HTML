/*Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .
Линейный поиск используется для поиска ключевого элемента среди нескольких элементов.
Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.
Алгоритм:
Шаг 1: Обход массива
Шаг 2: Сопоставьте ключевой элемент с элементом массива
Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
Шаг 4: Если ключевой элемент не найден, верните -1*/





function linearSearch(searchElement, array) {
    result = -1;
    array.forEach(elementOfArray => {
       if(elementOfArray === searchElement) {
        result = array.indexOf(elementOfArray);
        }
    });
    return result;
}

/* /*Find the element that appears once in a sorted array
Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.
Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.
Алгоритм:
Шаг 1: Обход массива через один элемент
Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
Шаг 3: Вернем элемент или позицию в массиве
Шаг 4: Если ключевой элемент не найден, верните -1 или что то еще :)
…
Шаг 5: Исправить ошибку ArrayIndexOutOfBoundsException*/

function searchSingleElement (array) {
    let result = -1;
    if(array.length % 2 == 0) {
        return result;
    }
    for (let i = 0; i < array.length-1; i = i + 2) {
        if(array[i] !== array[i+1]) {
            return result = array[i];
        }
    }
    if(result === -1) {
       return result = array[array.length - 1];
    }
}

