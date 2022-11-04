const user1 = {
    name: 'Arsen',
    job: 'Frontend Dev'
}

// opsts - массив объектов. Такая структура данных в итоге приходит с сервера
const posts = [
    {
        title: 'My first title',
        descr: 'My first description',
        author: 'Arsen'
    },
    {
        title: 'My second title',
        descr: 'My second description',
        author: 'Ivan' 
    }
]

const title= 'Title 1'       //prompt('Введите заголовок');
const descr = 'Descr 1'      //prompt('Введите описание');
const author = 'Author 1'    //prompt('Введите автора');

//Вернуть новый массив с добавленным данными к posts. Не с помощью push

const newPost = {
    title, 
    descr, 
    author
}

const newPosts = posts.concat(newPost)

// console.table(newPosts); // выводит данные в виде таблицы в консоль

//В консоли отобразить разметку (HTML) для каждого из постов


    // for (let i = 0; i < newPosts.length; i++) {
    // console.log(
    //     `<div>
    //         <p class = "title">${newPosts[i].title}</p>
    //         <p class = "descr">${newPosts[i].descr}</p>
    //         <p class = "author">${newPosts[i].author}</p>
    //      </div>
    //      `);
    // }

// const user = {
//     name: 'Valeriia',
//     age: 31
// }

// console.log(` <div>
//     <p class = "user">${user.name}</p>
//     <p class = "age">${user.age}</p>
// </div>`);

const book = {
    author: 'Pushkin',
    title: 'Kapitanskaya Dochka',
    count: '500'
}

// console.log(`
//     Author: ${book.author}
//     Title: ${book.title}
//     Count: ${book.count}`);

const books = [
    {
        author: 'Pushkin',
        title: 'Kapitanskaya Dochka',
        count: '256'        
    },
    {
        author: 'Tolstoy',
        title: 'Voyna i mir',
        count: '960'
    },
    {
        author: 'Bulgakov',
        title: 'Master i Margarita',
        count: '470'       
    }
]

const newAuthor = prompt('Author:');
const newTitle = prompt('Title:');
const newCount = prompt('Count:');
const newBook = {
    author: newAuthor,
    title: newTitle,
    count: newCount     
}

// const booksDB = books.concat({author: newAuthor, title: newTitle, count: newCount})
const newBooks = [...books, newBook];

newBooks.forEach(el => 
    console.log(`
    <div class ="book"> 
        <p>Author: ${el.author}</p>
        <p>Title: ${el.title}</p>
        <p>Count: ${el.count}</p>
    </div>`)
    )

newBooks.map(book => {
    console.log(`
    <div class ="book"> 
        <p> ${book.author}</p>
        <p>Title: ${book.title}</p>
        <p>Count: ${book.count}</p>
    </div>`
    );
})

