document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${text}</span>
            <button>Delete</button>
        `;

        li.querySelector('input').addEventListener('change', (e) => {
            li.querySelector('span').classList.toggle('completed', e.target.checked);
        });

        li.querySelector('button').addEventListener('click', () => {
            todoList.removeChild(li);
        });

        todoList.appendChild(li);
    }
});
