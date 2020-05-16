import { Person } from '../week4/person.js'

document.querySelector('input[type="submit"]').addEventListener('click', saveForm);

function saveForm(event) {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let birthDate = document.getElementById('birth-date').value;
    let phoneNumber = document.getElementById('phone-number').value;

    let person = new Person(firstName, lastName, birthDate, phoneNumber);

    let people = [];

    if (localStorage.getItem('people')) {
        people = JSON.parse(localStorage.getItem('people'));
    }

    people.push(person);

    localStorage.setItem('people', JSON.stringify(people));

    addPeople();

    event.preventDefault();
}

function addPeople() {
    let people = JSON.parse(localStorage.getItem('people'));
    people.forEach(
        person => {
            document.getElementById('people').innerHTML = person.FirstName;
        }
    )
    
}

// Function to toggle my notes for the week
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);
