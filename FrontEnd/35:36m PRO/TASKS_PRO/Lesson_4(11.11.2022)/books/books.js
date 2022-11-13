let main = document.querySelector("main");

// const book = {
//     author: 'Pushkin A. S.',
//     title: 'Kapitanskaya Dochka',
//     count: '500'
// }

// // innerHTML - позволяет добавить HTML в элемент

// main.innerHTML = `
//     <div class= "book">
//         <h1>Title: ${book.title}</h1>
//         <p>Author: ${book.author}</p>
//         <p>Pages: ${book.count}</p>
//     </div>
// `;

const books = [
  {
    id: 1,
    author: "Pushkin",
    title: "Kapitanskaya Dochka",
    count: 256,
  },
  {
    id: 2,
    author: "Tolstoy",
    title: "Voyna i mir",
    count: 960,
  },
  {
    id: 3,
    author: "Bulgakov",
    title: "Master i Margarita",
    count: 470,
  },
];

console.log(books);

function showBooks() {
  books.map((book) => {
    main.innerHTML += `
            <div class= "book book-${book.id}">
                <h1>Title: ${book.title}</h1>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.count}</p>
                <button class="delete-btn" id = "${book.id}">Delete</button>›
            </div>
        `;
  });
}

showBooks();

const buttons = document.querySelectorAll(".delete-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const idAtr = button.getAttribute("id");
    const delBook = document.querySelector(`.book-${idAtr}`);
    delBook.remove();
  });
});
