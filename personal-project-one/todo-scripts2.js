import { Task } from './task.js';

document.querySelector('#add-task').addEventListener('click', saveTask);

function saveTask(event) {
    let id = new Date().valueOf();
    let taskItem = document.getElementById('myInput').value;

    let task = new Task(id, taskItem);
    let tasks = [];

    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTask();

    event.preventDefault();
}

function addTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(
        task => {
            document.getElementById('tasks').innerHTML = task.Task;
        }
    );
}