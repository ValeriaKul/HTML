const data = [
    {
        id: 1,
        name: 'Anatoly',
        email: 'anatoly@mail.ru',
        avatar: './media/img1.jpeg'
    },
    {
        id: 2,
        name: 'Ruslan',
        email: 'ruslan@mail.ru',
        avatar: './media/img1.jpeg'
    },
    {
        id: 3,
        name: 'Oleg',
        email: 'oleg@mail.ru',
        avatar: './media/img1.jpeg'
    },
    {
        id: 4,
        name: 'Ivan',
        email: 'ivan@mail.ru',
        avatar: './media/img1.jpeg'
    },
];

const root = document.querySelector('#root');
 
function getCard (name, mail, avatar) {
    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const mail_elem = document.createElement('a');
    const avatar_elem = document.createElement('img');
    
    card.classList.add('card');
    
    name_elem.innerText = name;
    mail_elem.innerText = mail;
    mail_elem.href = `mailto:${mail}`;
    avatar_elem.src = avatar;
    card.append(name_elem, mail_elem, avatar_elem);
    return card;
}

data.forEach(user => {
    
    const card = getCard(user.name, user.email, user.avatar);
    root.append(card);

})
