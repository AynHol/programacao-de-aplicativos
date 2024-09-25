var tasks = [];

function addTask() {
    const input = document.getElementById("task-text");
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Você tentou adicionar uma tarefa sem texto");
        return;
    }
    const newTask = {
        id: Math.floor(Math.random() * 1000000),
        text: taskText,
        completed: false,
    };
    tasks.push(newTask);
    render();
    input.value = "";
    input.focus();
}

function render() {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        if (tasks[i].completed === true) {
            li.classList.add("completed");
        }
        const span = document.createElement("span");
        span.textContent = tasks[i].text;
        const finish = document.createElement("button");
        finish.textContent = tasks[i].completed ? "Desmarcar" : "Concluir";
        finish.classList.add("check");
        const edit = document.createElement("button");
        edit.textContent = "edit";
        edit.classList.add("edit");
        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        const div = document.createElement("div");
        div.appendChild(finish);
        div.appendChild(edit);
        div.appendChild(deletar);
        li.appendChild(span);
        li.appendChild(div);
        tasklist.appendChild(li);
    }
}
