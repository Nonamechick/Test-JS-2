const todolist = [{ 
    name: "cat",
    dueDate: '2024-10-10',  // Changed duetodate to dueDate
}, {
    name: "dog",
    dueDate: '2024-10-21',
}, { 
    name: "bull",
    dueDate: '2024-12-31', 
}, {
    name: "panda",
    dueDate: '2024-09-13'  // Fixed date format to '2024-09-13'
}];

rendertodolist();

function rendertodolist() {
    let todolisthtml = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const { name, dueDate } = todoObject;  // Destructured correctly
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todolist.splice(${i}, 1);
                rendertodolist();
            " class="delete-todo-button">Delete</button>
        `;
        todolisthtml += html;
    }
    

    document.querySelector('.js-todo-list').innerHTML = todolisthtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 

    todolist.push({
        name,
        dueDate,
    });

    inputElement.value = '';

    rendertodolist();
}
