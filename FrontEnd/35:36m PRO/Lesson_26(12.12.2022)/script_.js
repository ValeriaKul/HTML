//! fetch - возвращает промисы
//! promice - инструмент для работы с ассинхронностью и сетевыми запросами
//! (resolve, reject)
//! API - application platform interface 


 //? коды ответов сервера(status):
 //? 100 - данные по подключению
 //? 200 - положительный ответ 
 //? 300 - отсутствие прав
 //? 400 - ошибка пользователя
 //? 500 - ошибка сервера

fetch('https://fakestoreapi.com/products/10000000')
    .then(resp => {
        console.log(resp);
        return resp.json();
    }, err => {
        console.log(err);
    }) //resolve
    .then(data => console.log(data), () => {
        console.log('json parse error');
    }); //reject

const promise = new Promise((resolve, reject) => {
    const value = Math.random();
    if (value > 0.5) {
        resolve(value);
    } else {
        reject(value);
    }
})

promise.then(
    (value) => console.log(`Resolve: ${value}`),
    (value) => console.log(`Reject: ${value}`)
);

function then (resolve, reject) {
    const func = (resolve, reject) => {
        const value = Math.random();
        if (value > 0.5) {
            resolve(value);
        } else {
            reject(value);
        }
    }
    func (resolve, reject);
}

 