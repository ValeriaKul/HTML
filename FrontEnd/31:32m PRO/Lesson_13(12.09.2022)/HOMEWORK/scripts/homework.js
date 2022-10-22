
const containerRoot = document.querySelector('.root');
const card = document.createElement('div');
card.classList.add('card');

const article = document.createElement('p');
const title = document.createElement('p');
const price = document.createElement('p');

article.innerText = 'Article: 1';
title.innerText = 'Title: MacBook PRO';
price.innerText = 'Price: 2500';

containerRoot.append(card);
card.append(article, title, price);

// card.style.width = '15px 200px';
// card.style.backgroundColor = 'grey';
// card.style.border = '5px solid black';
// card.style.borderRadius = '5px';
// card.style.padding = '10px';
// card.style.margin = '15px';

