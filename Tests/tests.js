import { Thing } from './thing.js';

document.querySelector('#add-thing').addEventListener('click', saveForm);

function saveForm(event) {
    let name = document.getElementById('my-input').value;
    let id = new Date().valueOf;
    
    let thing = new Thing (name, id);

    let things = [];

    if (localStorage.getItem('things')) {
        things = JSON.parse(localStorage.getItem('things'));
    }

    things.push(thing);

    localStorage.setItem('things', JSON.stringify(things));

    addThing();

    event.preventDefault();
}

function addThing() {
    let things = JSON.parse(localStorage.getItem('things'));
    let ul = document.getElementById('my-ul');
    let li = document.createElement('LI');
/*
    things.forEach(
        thing => {

            document.querySelector('ul').appendChild(thing.name);
            //document.getElementById('second-thing').innerHTML = thing.Name;
        }
    )
    */
}
