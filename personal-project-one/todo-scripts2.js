import {
    Task
} from './task.js';

window.addEventListener('load', tasksLeft);
window.addEventListener('load', loadTasks);

let tasks = [];

document.getElementById('add-task').addEventListener('click', addTask);

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

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

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
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

function deleteTask(event) {
    
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