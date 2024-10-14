/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import './reset.css';
import Task from './Task';

var tasks: Task[] = [];

function enterKey(evento: KeyboardEvent){
    if(evento.key === 'Enter'){
        addTask();
    }
}

function addTask() {
    const input = document.getElementById("task-text") as HTMLInputElement;
    const taskText = input.value.trim();

    if (taskText === '') {
        alert("Você tentou adicionar uma tarefa sem texto");
        return;
    }

    const newTask = new Task(taskText);
    tasks.push(newTask);

    console.log(tasks)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    render()
    input.value = "";
    input.focus();
}

function render() {
    const taskList = document.getElementById("task-list") as HTMLUListElement;
    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        if (tasks[i].getCompleted() === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tasks[i].getText();

        const check = document.createElement("button");
        check.textContent = tasks[i].getCompleted() ? "Desmarcar" : "Concluir";
        check.classList.add("check");
        check.setAttribute("onclick", `trocaConcluir(${tasks[i].getId()})`);

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");
        edit.setAttribute("onclick", `editarTarefa(${tasks[i].getId()})`)

        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tasks[i].getId()})`)

        const div = document.createElement("div");

        div.appendChild(check)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        taskList.appendChild(li);
    }
}

window.enterKey = enterKey;
window.addTask = addTask;