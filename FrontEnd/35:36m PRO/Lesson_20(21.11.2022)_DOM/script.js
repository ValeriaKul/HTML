// const elem = document.querySelector('p');

// const elemList = document.querySelectorAll('p');
// let elemArray = [];
// elemList.forEach(elem => elemArray.push(elem.innerText));

// const textList = [...elemList].map(elem => elem.innerText);
// console.log(textList);

// const main_elem = document.getElementById('main');
// const p_list = document.getElementsByClassName('p');

// console.log(main_elem);
// console.log(p_list);

//todo: 1. Bывести в консоль текст из параграфа, который находится в div с классом main
//? const elem = document.querySelector('.main p');

//todo: 2. Bывести параграф с классом info из div с идентификатором main
//? const elem = document.querySelector('#main .info');

//todo: 3. Hайти параграф с классом main, который находится в div, который находится в div с идентификатором info
//?const elem = document.querySelector('#info div .main');


const root = document.querySelector('#root');

const products = [
    {
        title: 'bike',
        price: 25000,
        count: 10,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
    },
    {
        title: 'scooter',
        price: 25000,
        count: 15,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
    }, 
    {
        title:'ski',
        price: 30000,
        count: 0,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
    }
];

products.forEach(({title, price, count, link, img}) => {

    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const count_p = document.createElement('p');
    const link_a = document.createElement('a');
    const img_elem = document.createElement('img');
    container.append(title_p, price_p, count_p, link_a, img_elem);
    root.append(container);

    container.classList.add('product');
    link_a.innerText = 'Подробнее...';
    img_elem.src = img;
    link_a.href = link;
    link_a.target = '_blank'; //! открывает ссылку в соседней вкладке
    title_p.innerText = title;
    price_p.innerText = price;
    count_p.innerText= count === 0 ? count_p.innerText = `Товар закончился` : count;
    
})


//todo: 4. Добавить count и прописать количество товара в каждом продукте
// for (let i = 0; i < products.length; i++) {
//     products[i].count = Math.round(Math.random() * 100);
// }
// console.log(products);

//todo: 5. B случае, если кол-во товара равно нулю выведите фразу "Товар закончился"




