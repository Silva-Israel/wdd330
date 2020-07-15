// Filter tasks by active/completed
function filter() {
var fil = document.querySelector('ul');
    if (fil.target.tagName === 'LI') {
        if (fil.target.classList.toggle('checked')) {
            fil.style.display = 'none';
        }
    }
}

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

document.querySelector('#add-task').addEventListener('click', saveLocal);

function saveLocal(event) {
    let id = new Date().valueOf();
    let task = document.getElementById('myInput').value;

    let taskList = new Task(id, task);
    let tasks = [];

    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(taskList);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    newElement2();

    event.preventDefault();
}

function newElement2() {
    let silvas = JSON.parse(localStorage.getItem('tasks'));
    let ul = document.getElementById('myUL');
    silvas.forEach(
        silva => {  
            ul.appendChild('<li>' + silva.Task + '</li>');
        }
    );
}