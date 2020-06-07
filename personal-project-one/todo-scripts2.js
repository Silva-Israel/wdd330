import { Task } from './task.js';

let tasks = [];

document.getElementById('myTasks').addEventListener('load', loadTasks);
document.getElementById('add-task').addEventListener('click', addTask);

function loadTasks() {
    if (localStorage.tasks) {
        tasks = JSON.parse(localStorage.tasks);
        
        showTasks();
    }
}

function showTasks() {
    document.getElementById('myTasks').innerHTML = '';

    if (tasks.length > 0) {
        tasks.forEach(
            task => {
                document.getElementById('myTasks').innerHTML +=
                `<div>
                    <input type="checkbox" id="${task.Id}">
                    ${task.Task}
                </div>`;

                let checkboxes = document.querySelectorAll('input[type="checkbox"]');

                checkboxes.forEach(
                    checkbox => {
                        checkbox.addEventListener('click', toggleTask);
                    }
                );
            }
        );
    }
}

function toggleTask() {
    let checked = document.querySelector('section div');
    checked.classList.add('checked');
}

function addTask(event) {
    let task = new Task(document.getElementById('myInput').value);

    tasks.push(task);

    localStorage.tasks = JSON.stringify(tasks);

    document.getElementById('myInput').value = '';

    showTasks();

    event.preventDefault();
}