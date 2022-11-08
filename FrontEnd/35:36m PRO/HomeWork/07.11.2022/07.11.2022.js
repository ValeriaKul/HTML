const root = document.querySelector('.root');
const elem = document.createElement('div');
const elem2 = document.createElement('div');
const buttonElem = document.createElement('button');
const imgElem = document.createElement('img');

buttonElem.innerText = 'RUN';

elem.classList.add('elem');
elem2.classList.add('button-div');
imgElem.classList.add('pressImg1');
buttonElem.classList.add('pressBtn1');

imgElem.setAttribute('src', 'https://bipbap.ru/wp-content/uploads/2017/07/morskie_peyzagi_krasivie_plyagi_foto_12.jpg');
imgElem.setAttribute('alt', 'image');

elem2.append(buttonElem);
elem.append(imgElem, elem2);
root.append(elem);

buttonElem.addEventListener('click', changeButton);

function changeButton () {
    buttonElem.classList.toggle('pressBtn2');
    imgElem.classList.toggle('pressImg2');
    console.log('Hello');
}

