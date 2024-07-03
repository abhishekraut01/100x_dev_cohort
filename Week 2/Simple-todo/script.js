document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-for-todo');
    const addButton = document.getElementById('myBtn');
    const taskList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText.length > 0) {
            addTask(taskText)   
        }
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = inputField.value.trim();
            if (taskText.length > 0) {
                addTask(taskText)   
            }
        }
    });

    function addTask(taskText) {
        const list = document.createElement('li');
        list.className = 'todo-item';
        list.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList = 'delete-btn';
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            list.remove();
        })

        list.appendChild(deleteButton);
        taskList.appendChild(list);
        inputField.value = '';
    }
});
