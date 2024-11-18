const todolist = [{ 
    name: "cat",
    dueDate: '2024-10-10',
}, {
    name: "dog",
    dueDate: '2024-10-21',
}, { 
    name: "bull",
    dueDate: '2024-12-31', 
}, {
    name: "panda",
    dueDate: '2024-09-13'
}];

rendertodolist();

function rendertodolist() {
    let todolisthtml = '';

    todolist.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button" data-index="${index}">Delete</button>
        `;
        todolisthtml += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todolisthtml;


    document.querySelectorAll('.js-delete-todo-button').forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            todolist.splice(index, 1);
            rendertodolist();
        });
    });
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 

    todolist.push({ name, dueDate });

    inputElement.value = '';

    rendertodolist();
}
