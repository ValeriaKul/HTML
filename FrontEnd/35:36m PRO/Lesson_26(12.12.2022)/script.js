/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => resp.json())
    .then(data => console.log(data))
 */
const root = document.querySelector('.root');

function createElement(data) {
    const container = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');
    container.append(title, body);
        
    title.innerText = data.title;
    body.innerText = data.body;
    root.append(container);
}


//todo: создать функцию, которая получает в качестве аргумента id поста и выводит данные о нем в консоль

function getPostInfo (post_id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
        .then(resp => resp.json())
        .then(data => createElement(data));

}

getPostInfo(2);


