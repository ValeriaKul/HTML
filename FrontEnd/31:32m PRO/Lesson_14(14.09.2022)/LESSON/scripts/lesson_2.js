const data = [
    {
        id: 1,
        title: 'Велосипед',
        price: 100,
    },
    {
        id: 2,
        title: 'Самокат',
        price: 500,       
    },
    {
        id: 3,
        title: 'Скейт',
        price: 200, 
    }
]

const rootElem = document.querySelector('.root');

data.forEach(({id, title, price}) =>{
    const cardElem = document.createElement('div');
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    // const {id, title, price} = product
    // idElem.innerText= `ID: ${product.id}`;
    // titleElem.innerText= `Title: ${product.title}`;
    // priceElem.innerText= `Price: ${product.price}`;
    idElem.innerText= `ID: ${id}`;
    titleElem.innerText= `Title: ${title}`;
    priceElem.innerText= `Price: ${price}`;
    
    cardElem.classList.add('card');
    
    cardElem.append(idElem, titleElem, priceElem);
    rootElem.append(cardElem);
})



