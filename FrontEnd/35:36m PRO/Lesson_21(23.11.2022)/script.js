const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');

const data = [];

add_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  data.push({ title, price });
  add_form.title.value = '';
  add_form.price.value = '';
  rerender();
});

function rerender() {
  products.innerText = '';
  data.forEach(({ title, price }) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    title_p.innerText = title;
    price_p.innerText = price;

    container.classList.add('product');

    container.append(title_p, price_p);
    products.append(container);
  });
}
