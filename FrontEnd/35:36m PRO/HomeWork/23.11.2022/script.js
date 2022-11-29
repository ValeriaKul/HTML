//todo: необходимо реализовать страницу, которая получает данные о товаре и выводит информационные карточки с товарами. В нижней части страницы должен быть расчет общей суммы. Результат должен выглядеть приблизительно как на макете https://www.figma.com/file/wRonUTYoOVL3ii4meCtdzR/Untitled?node-id=1%3A2&t=5i8ANTCkEpFzMpoi-0

const root = document.querySelector('.root');

const formElem = document.createElement('form');
const titleInput = document.createElement('input');
const priceInput = document.createElement('input');
const amountInput = document.createElement('input');
const buttonAdd = document.createElement('button');

const products = document.createElement('div');

const totalAmount = document.createElement('div');
const totalAmountElem = document.createElement("p");
const totalQuantityElem = document.createElement("p");

totalAmount.append(totalAmountElem, totalQuantityElem);
formElem.append(titleInput,priceInput,amountInput, buttonAdd);
root.append(formElem, products, totalAmount);

formElem.classList.add('add_form');
titleInput.classList.add('input_title');
priceInput.classList.add('input_price');
amountInput.classList.add('input_amount');
buttonAdd.classList.add('btn_add');

products.classList.add('products');

totalAmount.classList.add("total");
totalAmountElem.classList.add("total_amount");
totalQuantityElem.classList.add("total_qauntity");  

titleInput.type = 'text';
priceInput.type = 'number';
amountInput.type = 'number';

titleInput.placeholder = 'title';
priceInput.placeholder = 'price';
amountInput.placeholder = 'amount';

buttonAdd.textContent = 'ADD';

let data = [];
let totalCost = 0;
let totalQuantity = 0;

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const price = +priceInput.value;
    const amount = +amountInput.value;
    data.push({title, price, amount});
    formElem.title = "";
    formElem.price = "";
    formElem.amount = "";
    rerender();
  });

  function rerender() {
    products.innerText = "";
        totalCost = 0;
        totalQuantity = 0;
    
    data.forEach(({ title, price, amount}) => {
        const container = createProductCard(title, price, amount);
        products.append(container);
        totalCost += price * amount;
        totalQuantity += amount; 
        totalAmountElem.innerText = `Общая стоимость: ${totalCost}$`;
        totalQuantityElem.innerText = `Общее количество: ${totalQuantity}`;
      });
    };

    function createProductCard(title, price, amount) {
        const container = document.createElement("div");
        const title_p = document.createElement("p");
        const price_p = document.createElement("p");
        const amount_p = document.createElement("p");

        title_p.classList.add('title');
        price_p.classList.add('price');
        amount_p.classList.add('amount');

        title_p.innerText = title;
        price_p.innerText = `${price}$`;
        const sum = price * amount;
        amount_p.innerText = `${price}$ * ${amount} = ${sum}$`;
        container.classList.add("product");
        container.append(title_p, price_p, amount_p);
        return container;
    };
   

    rerender();









