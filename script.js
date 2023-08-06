// SELECTORS
const input = document.querySelector('.container form input[type=text]');
const addBtn = document.querySelector('.container form .add_btn');
const filter = document.querySelector('.container form .filter');
const todos = document.querySelector('.container .todos');


// EVENTS 
addBtn.addEventListener('click', addTodoFunc);
todos.addEventListener('click', checkTodoFunc);
filter.addEventListener('change', filterFunc);


// FUNCTIONS
function addTodoFunc(event) { // PointerEvent
    event.preventDefault();
    // console.log(input.value);
    // input.value = 'Kim';

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const span1 = document.createElement('span');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.innerHTML = '<i class="fa-solid fa-check"></i>';
    span2.innerHTML += '<i class="fa-solid fa-trash"></i>';
    
    todo.appendChild(span1);
    todo.appendChild(span2);
    todos.appendChild(todo);

    input.value = '';
}

function checkTodoFunc(event) { // PointerEvent
    // let parent = event.target.parentElement.parentElement;
    
    if (event.target.classList[1] === 'fa-check') {
        event.target.parentElement.parentElement.classList.toggle('done');
    };

    if (event.target.classList[1] === 'fa-trash') {
        event.target.parentElement.parentElement.remove();
    };
}

function filterFunc(event) { // Pointerevent
    // console.log(event.target.value);  // all, completed, uncompleted
    const todos = document.querySelectorAll('.todo');

    if (event.target.value === 'all') {
        for (let i = 0; i < todos.length; i++) {
            todos[i].style.display = 'flex';
        }
    }

    if (event.target.value === 'completed') {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].classList.contains('done')) todos[i].style.display = 'flex';
            else todos[i].style.display = 'none';
        }
    }
    if (event.target.value === 'uncompleted') {
        for (let i = 0; i < todos.length; i++) {
            if (!todos[i].classList.contains('done')) todos[i].style.display = 'flex';
            else todos[i].style.display = 'none';
        }
    }
}