document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done-button');
    doneButton.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    li.appendChild(doneButton);
    taskList.appendChild(li);
}
