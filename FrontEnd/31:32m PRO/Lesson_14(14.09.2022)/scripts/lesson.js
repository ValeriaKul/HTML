const rootElem = document.querySelector('.root');

// creare ELEMENTS
const card = document.createElement('div');
const idElem = document.createElement('p');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const ageElem = document.createElement('p');
const salaryElem = document.createElement('p');
const mailElem_1 = document.createElement('span');
const mailElem = document.createElement('a');
const imgElem = document.createElement('img');

// add TEXT to elements
idElem.innerText = 'ID: 1';
firstNameElem.innerText = 'First name: Olga';
lastNameElem.innerText = 'Last name: Petrova';
ageElem.innerText = 'Age: 18';
salaryElem.innerText = 'Salary: 1500$';
mailElem_1.innerText = 'E-mail: '
mailElem.innerText = 'olga.petrova@gmail.com';

// add CLASS to card
card.classList.add('card');
imgElem.classList.add('photo');

// ====== ADD PHOTO ======

imgElem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');
imgElem.setAttribute('alt', 'image');
// imgElem.src = 'https://reqres.in/img/faces/12-image.jpg';
// imgElem.alt = 'photo';
card.append(idElem, firstNameElem, lastNameElem, ageElem, salaryElem, mailElem_1, mailElem, imgElem);
rootElem.append(card);

// ====== ADD MAIL ======

mailElem.setAttribute('href', 'mailto:airelav.vk@gmail.com');
// mailElem.href = 'mailto: airelav.vk@gmail.com';

// ====== TASK_1 ======

const card2 = document.createElement('div');
const idElem2 = document.createElement('p');
const firstNameElem2 = document.createElement('p');
const lastNameElem2 = document.createElement('p');
const ageElem2 = document.createElement('p');
const salaryElem2 = document.createElement('p');
const mailElem2_2 = document.createElement('p');
const mailElem2 = document.createElement('a');
const imgElem2 = document.createElement('img');

idElem2.innerText = 'ID: 2';
firstNameElem2.innerText = 'First name: Oleg';
lastNameElem2.innerText = 'Last name: Petrov';
ageElem2.innerText = 'Age: 28';
salaryElem2.innerText = 'Salary: 2500$';
mailElem2_2.innerText = 'E-mail: '
mailElem2.innerText = 'oleg.petrov@gmail.com';

card2.classList.add('card');

imgElem2.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');
imgElem2.setAttribute('alt', 'image');
mailElem2.setAttribute('href', 'mailto:oleg.petrov@gmail.com');

card2.append(idElem2, firstNameElem2, lastNameElem2, ageElem2, salaryElem2, mailElem2_2, mailElem2, imgElem2);
rootElem.append(card2);




