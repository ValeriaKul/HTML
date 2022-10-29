const square = document.querySelector('.square');
const container = document.querySelector('.container');

square.addEventListener('click', () => {
    container.innerText = 'красный квадрат';
    container.style.color = 'purple';
});