
const header = document.querySelector('.header');
const paragraph = document.getElementById('paragraph'); // одна и та же функция
const paragraph2 = document.querySelector('#paragraph');// одна и та же функция
const container = document.querySelector('.container');


// console.log(header);
// console.log(paragraph);

header.style.color = 'red';
paragraph.style.backgroundColor = 'green';
header.classList.add('class_added');
header.classList.remove('class_deleted');

const text = document.createElement('p');
text.innerText = 'Text ...';

const divElemBig = document.createElement('div');
const divElemSmall = document.createElement('div');

divElemBig.append(divElemSmall);

divElemBig.innerText = 'Текст внутри нового div';
container.append(text, divElemBig); // не важен порядок создания новых элементов. Важен порядок добавления.






