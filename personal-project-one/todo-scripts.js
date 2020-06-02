import { Task } from './task.js';

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
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
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

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
    //newElement();

    event.preventDefault();
}

// Create a new list item when clicking on the "Add" button
function addTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(
        task => {
            var li = document.createElement("LI");
            var inputValue = addTask();
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById('myUL').appendChild(li);
        }
    )
}

function newElement() {
    var li = document.createElement("LI");
    var inputValue = addTask();

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById('myUL').appendChild(li);

    /*
    if (inputValue === '') {
        alert("Please, write something.");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    //document.getElementById("myInput").value = "";
*/
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Get the number of tasks in my list
    let taskNumber = JSON.parse(localStorage.getItem('tasks'));
    if (taskNumber === null) {
        document.getElementById('tasks-left').innerHTML = 'No tasks';
    } else if (taskNumber.length === 1) {
        document.getElementById('tasks-left').innerHTML = taskNumber.length + ' task left';
    } else {
        document.getElementById('tasks-left').innerHTML = taskNumber.length + ' tasks left';
    }

}