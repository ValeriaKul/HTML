const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");

let data = [
  {
    id: 1,
    title: "Велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 25000,
  },
  {
    id: 3,
    title: "Самокат",
    price: 15000,
  },
];

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  const id = Date.now();
  data.push({ id, title, price });
  add_form.title.value = "";
  add_form.price.value = "";
  rerender();
});



function rerender() {
  products.innerText = "";

  if (data.length === 0) {
    const elem = document.createElement("p");
    elem.innerText = "Товаров нет";
    products.append(elem);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = createProductCard(id, title, price);
      products.append(container);
    });
  }
};

function getRandomColor() {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  return `rgb(${r}, ${g}, ${b})`;
}

function deleteProduct (id) {
    data = data.filter(el => el.id !== id);
    rerender();
}

function createProductCard(id, title, price) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  const delete_btn = document.createElement("button");
  delete_btn.innerText = "Delete";
  delete_btn.addEventListener("click", () => {
    deleteProduct(id);
  });

  container.addEventListener("dblclick", () => {
    container.style.backgroundColor = getRandomColor();
  });

  //реакция на движение мыши
  container.addEventListener("mousemove", () => {
    container.style.backgroundColor = red;
  });

  title_p.innerText = title;
  price_p.innerText = price;
  container.classList.add("product");
  container.append(title_p, price_p, delete_btn);
  return container;
};

rerender();
