import { Task } from './task.js';

window.addEventListener('load', tasksLeft);
window.addEventListener('load', loadTasks);

let tasks = [];

document.getElementById('add-task').addEventListener('click', addTask);

//function addCheck() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
//}

function loadTasks() {
    if (localStorage.tasks) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        //tasks = JSON.parse(localStorage.tasks);
        
        showTasks();
    }
}

function showTasks() {
    document.getElementById('myTasks').innerHTML = '';

    if (tasks.length > 0) {
        tasks.forEach(
            task => {
                let container = document.querySelector('ul');
                let list = document.createElement('LI');
                
                list.innerHTML = task.Task;
                container.appendChild(list);

                addCheck();
            }
        );
    }
}

function addCheck() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// Set a task to local storage
function addTask(event) {
    let task = new Task(document.getElementById('myInput').value);

    tasks.push(task);

    localStorage.tasks = JSON.stringify(tasks);

    document.getElementById('myInput').value = '';

    showTasks();

    tasksLeft();

    event.preventDefault();
}

// Get the number of tasks left in my list
function tasksLeft() {
    let taskNumber = JSON.parse(localStorage.getItem('tasks'));
    let tasksleft = document.getElementById('tasks-left');

    if (taskNumber === null) {
        tasksleft.innerHTML = 'No tasks';
    } else if (taskNumber.length === 1) {
        tasksleft.innerHTML = taskNumber.length + ' task left';
    } else {
        tasksleft.innerHTML = taskNumber.length + ' tasks left';
    }
}
