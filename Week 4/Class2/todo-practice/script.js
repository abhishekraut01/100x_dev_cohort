var taskInput = document.getElementById("task-input");
var addTaskButton = document.getElementById("add-task-button");
var taskList = document.getElementById("task-list");
let childId = 1;

function markAsDone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[1].innerHTML = "Done";
}

function createChild(task, id) {
    var parent = document.createElement("li");

    const firstChild = document.createElement("div");
    firstChild.innerHTML = task;

    const secondChild = document.createElement("button");
    secondChild.innerHTML = "Mark as Done";
    secondChild.setAttribute("onclick", `markAsDone(${id})`);

    parent.appendChild(firstChild);
    parent.appendChild(secondChild);
    parent.setAttribute("id", id);

    return parent;
}

// addTaskButton.addEventListener("click", function (e) {
//     taskList.appendChild(createChild(taskInput.value, childId++));
// });

//state will always be an array
//Every element of state would have a title and id

function updateDomAccToState(state) {
    const parent = document.getElementById("task-list")
    parent.innerHTML = "";
    // state.forEach(element => {
    //     parent.appendChild(createChild(element.title, element.id));
    // });

    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].id);
        parent.appendChild(child);
    }
}
window.setInterval(async function(){
    const res = await fetch(`https://sum-server.100xdevs.com/todos`)
    const json = await res.json();
    updateDomAccToState(json.todos);
},5000)