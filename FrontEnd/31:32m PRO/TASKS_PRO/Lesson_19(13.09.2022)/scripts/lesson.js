// const root = document.querySelector('#root');

// const divElem = document.createElement('div');
// const imgElem = document.createElement('img');
// const textElem = document.createElement('p');

// imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg'
// textElem.innerText = 'Описание пейзажа'

// divElem.append(imgElem, textElem);
// divElem.classList.add('card');
// root.append(divElem);

// console.log(divElem);

const root = document.querySelector('#root');
const divElem = document.createElement('div');

const texts = ['Text_1', 'Text_2', 'Text_3', 'Text_4'];

const p_list = texts.map(text => {
    const p_elem = document.createElement('p');
    p_elem.innerText = text;
    return p_elem;
}) 

divElem.append(...p_list);
root.append(divElem);