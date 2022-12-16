//todo После отправки формы добавлять продукт в корзину

//* Переменные
const addForm = document.querySelector(".add-form"); // форма добавления продукта
const productName = document.querySelector(".add-name"); // input продукта
const productsWrapper = document.querySelector(".products-wrapper"); // контейнер для продуктов
const notification = document.querySelector(".notification"); // уведомление
const submitBtn = document.querySelector(".submit-btn"); // кнопка редактировать

let editMode = false
// let editMode

//* Отображение продуктов при првоначальной загрузке
const showProducts = () => {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  if (products.length > 0) {
    products.forEach((product) => createProducts(product.id, product.name));
  }
};

const addProduct = (e) => {
  e.preventDefault();
  const currProduct = productName.value; // То, что ввел пользователь в инпут
  const id = new Date().getTime().toString(); // Создается ID

  if (currProduct && !editMode) {
    // создание элемента HTML
    createProducts(id, currProduct);
    // Добавить в LocalStorage
    addToLocalStorage(id, currProduct);
    // Отобразить уведомление
    showNotification("продукт добавлен", "success");
    // Вызов функции сброса
    resetOptions();
  } else if(currProduct && editMode) {

    
    console.log("редактируем элемент");
  }
};

//* Создание элемента
const createProducts = (id, name) => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  element.classList.add("product");
  element.innerHTML = `
    <h5 class="product-name" >${name}</h5>
      <div class="product-action">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
      </div>
    `;
  //* Добавить слушатели события
  //* Добавить слушатель на кнопку удаления
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteProduct);
  //* Добавить слушатель на кнопку редактирования
  const editBtn = element.querySelector(".edit-btn")
  editBtn.addEventListener("click", editProduct);

  deleteBtn.addEventListener("click", deleteProduct);
  //* Добавить элемент в контейнер продуктов
  productsWrapper.appendChild(element);
};

//* Уведомление при создании или удалении
const showNotification = (text, className) => {
  //* Добавляем для div класс, которы получим аргументом
  notification.classList.add(`${className}`);
  notification.querySelector(".notification-text").innerText = `${text}`;
  //* Для тега р внутри уведомления меняем текст на тот, что получили аргументом

  //* Отображаем div
  notification.style.display = "block";

  //* Через 3 секунды нужно скрывать обратно. none
  setTimeout(() => {
    notification.style.display = "none";
    notification.classList.remove(`${className}`)
  }, 3000);
  
};

//*Добавление в LocalStorage
const addToLocalStorage = (id, name) => {
  const products = getLocalStorage();
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
};

//* Удаление из LocalStorage
const removeFromLocalStorage = (id) => {
    const products = getLocalStorage();
    //* из массива products удалить элемент, id которого совпадает id удаляемого
    const newProducts = products.filter(el => el.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts))
}

const getLocalStorage = () => {
    //* Получаем то, что уже хранится в локалсторедже, если что-то есть, то строку переводим в массив и возвращаем, иначе - возвращаем пустой массив

    return localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
}

//* Очистка полей
const resetOptions = () => {
  //* Очистка поля ввода
  productName.value = "";
};

//* Удаление продукта
const deleteProduct = (e) => {
    //*e.target - кнопка, на которую нажали
    const productElement = e.target.parentElement.parentElement
    //* находим id элемента
    const id = productElement.id;
    //* удаляю элемент из HTML
    productsWrapper.removeChild(productElement);
    //* удалим из localSrorage, передаем id элемента, который хотим удалить
    removeFromLocalStorage(id)
    //* показывать уведомление
    showNotification("продукт удален", "danger");
};

// * Редактировать продукт
const editProduct = e =>{
    //переводим приложение в режим редаткирования
    editMode = true;
    //получаем название старого элемента 
    const oldProductName = e.target.parentElement.previousElementSibling; // h5
    // в режиме редактирования кнопка "добавить" меняется на "редактировать"
    submitBtn.value = 'Сохранить';
    // Название редатируемого продукта переходит в input
    // productName.value = oldProductName.textContent;
    productName.value = oldProductName.innerText;
  };
//* Слушаем события сабмит у addForm
addForm.addEventListener("submit", addProduct);

// вызов функции для первого рендеринга. Получаем данные из локалстореджа
showProducts(); // immediatly invoke

/* 
    С
    R
    U
    D
 */