const laptops = [
  {
    id: 1,
    name: "Acer",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 20000,
    category: "laptop",
  },
  {
    id: 2,
    name: "HP Pavillon",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 25000,
    category: "laptop",
  },
  {
    id: 3,
    name: "Samsung X20",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 40000,
    category: "monoblock",
  },
  {
    id: 4,
    name: "iPhone 13Pro",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 70000,
    category: "smartphone",
  },
  {
    id: 5,
    name: "Sony TI201",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 55000,
    category: "smartphone",
  },
  {
    id: 6,
    name: "Samsung",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 80000,
    category: "computer",
  },
  {
    id: 7,
    name: "Acer Computer M500",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 75000,
    category: "computer",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-input");
const categories = document.querySelectorAll(".category");

const showProducts = (products) => {
  productsContainer.innerHTML = products
    .map(
      (product) => `
        <div class="product">
            <img 
                src="${product.img}" 
                alt="" 
                class="product-img">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-price">${product.price}</p>
        </div>    
        `
    )
    .join("");
};
// Вызов при первой загрузке приложения
showProducts(laptops);
// Функция поиска по введенному значению

searchInput.addEventListener("input", (e) => {
  let searchProd = e.target.value;
  let newProducts = laptops.filter((el) =>
    el.name.toLowerCase().includes(searchProd.toLowerCase())
  );
  showProducts(newProducts);
  if (newProducts.length == 0) {
    showProducts(laptops);
  }
});

// Отфильтровать список элементов в html по введенному значению
// Используя метод фильтр проверяем, содержится ли введенная строка
// внутри имени объекта массива laptops
/*
    1. Используя метод filter отфильтровать список продуктов по введенному в input значению
    2. Вызвать функцию showProducts с отфильтрованными продуктами
    3*. Если в поле ничего не ввели, то просто вызывать showProducts со всеми продуктами
*/

/* 
    ДЗ. Сделать так, чтобы при вводе пробелов отображались все продуты
*/

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;

    const filteredByCategoryProducts = laptops.filter(
      (laptop) => laptop.category === selectedCategory.toLowerCase()
    );

    selectedCategory === "All"
      ? showProducts(laptops)
      : showProducts(filteredByCategoryProducts);
  });
});

// Переписать конструкцию if else на тернарный оператор


let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.join(""));