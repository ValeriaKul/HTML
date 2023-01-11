const todos = [
    {
        id: 1,
        title: 'drink',
        dttm: new Date().toLocaleString(),
        done_flg: true,
    },
    {
        id: 2,
        title: 'eat',
        dttm: new Date().toLocaleString(),
        done_flg: false,
    }
];

//todo 1: Hаписать процесс, который при отправке формы выводит ее содержимое в console

const container = document.querySelector('.wrapper');
const add_todo = document.querySelector('.add_todo');

add_todo.addEventListener('submit', event => {
    event.preventDefault(); //отменяет дефолтное поведение элемента
    const {title} = event.target;
    console.log(title.value);

    const new_todo = {
        id: Date.now(),
        title: title.value,
        dttm: new Date().toLocaleString(),
        done_flg: false
    };

    todos.push(new_todo);
    rerender();
    title.value = '';

})

function rerender() {
    //todo 2: Данная функция должна очистить div с классом todo_container
    const todo_container = document.querySelector(".todo_container");
    const count_container = document.querySelector(".count_container");
    todo_container.innerText = "";
    //todo 3: Пройтись циклом по todos и для каждого объекта добавить карточку со следующей структурой:
    /*
    <div>
    <p>title</p>
    <p>dttm</p>
    </div> 
    */
   //todo 8: добавить подсчет колличества сделаных и не сделаных дел, значения вывести в консоль
   const done_cnt = todos.reduce((prev, item) => prev + (item.done_flg ? 1 : 0), 0);
   const not_done_cnt = todos.length - done_cnt;
   
   count_container.innerText = `Done: ${done_cnt}; Not done: ${not_done_cnt}`;

    todos.forEach(todo => {
        const container = document.createElement('div');
        const title_p = document.createElement('p');
        const dttm_p = document.createElement('p');
        const info = document.createElement('div');
        const change_state = document.createElement('button');
        container.classList.add('item');
        if (todo.done_flg){container.classList.add('done')}
        change_state.innerText = 'Done';
        //todo 5: Написать обработчик нажатия на кнопку. При нажатии в консоль должен выводиться id
        change_state.addEventListener('click', (e) => {
            //todo 6: найти из массива todos объект с указанным id и заменить у него значение done_flg на противоположный
            //!====== Variant 1 =======
            const target =todos.find(item => item.id === todo.id);
            target.done_flg = !target.done_flg;
            rerender();
            //!====== Variant 2 =======
            // target.done_flg = !target.done_flg;
            // rerender();
        })
        title_p.innerText = todo.title;
        dttm_p.innerText = todo.dttm;
        change_state.innerText = todo.done_flg ? 'Done' : 'Do'
        //todo 7: Если дело еще не сделано, то у кнопки должен быть красный задний фон, если дело сделано, то зеленый
        change_state.style.backgroundColor = todo.done_flg ? '#16a085' : '#e74c3c';

        info.append(title_p, dttm_p);
        container.append(info, change_state);
        //todo 4: Kаждую карточку добавить в div с классом todo_container
        todo_container.append(container);
    })
   


}

rerender();

