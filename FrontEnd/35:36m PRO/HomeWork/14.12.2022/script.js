const root = document.querySelector('.root');
const form_txt = document.querySelector('.form_txt')
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

form_txt.innerText = 'Products search form by ID:';
btn.innerText = 'Go!';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    if (id <= 0 || id >= 21) {
        alert("wrong ID");
    } else {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(resp => resp.json())
            .then(({title, price, description, image}) => createPost (title, price, description, image))
        }
   
    e.target.id.value = '';
})

function createPost (title, price, description, image) {
    const container = document.createElement('div');
    const descr = document.createElement('div');
    const p_tille = document.createElement('p');
    const p_price = document.createElement('p');
    const p_desc = document.createElement('p');
    const img = document.createElement('img');

    p_tille.innerText = `Product: ${title}`;
    p_price.innerText = `Price: ${price} $`;
    p_desc.innerText = `About the product: ${description}`;
    img.src = image;

    container.classList.add('product');
    descr.classList.add('description');
    p_tille.classList.add('post_title');
    p_price.classList.add('post_price');
    p_desc.classList.add('post_desc');
    img.classList.add('img');

    descr.append(p_tille, p_price, p_desc)
    container.append(descr, img);
    root.append(container);
}

