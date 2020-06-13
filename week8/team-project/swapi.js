let counter;
let container = document.querySelector('ul');
let page = document.getElementById('page');

function nextCall() {
    container.innerHTML = '';
    fetch(`https://swapi.dev/api/people/?page=${counter}`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let list = document.createElement('LI');
                    list.innerHTML = person.name;
                    container.appendChild(list);

                    page.innerHTML = `Page ${counter - 1}`
                }
            )
        })
    counter++;
}

function personCall() {
    counter = 1;
    container.innerHTML = '';
    fetch('https://swapi.dev/api/people/?page=1')
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let list = document.createElement('LI');
                    list.innerHTML = person.name;
                    container.appendChild(list);

                    page.innerHTML = `Page ${counter - 1}`
                }
            )
        })
    counter++;
}

function previousCall() {
    container.innerHTML = '';
    fetch(`https://swapi.dev/api/people/?page=${counter - 2}`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let list = document.createElement('LI');
                    list.innerHTML = person.name;
                    container.appendChild(list);

                    page.innerHTML = ` Page ${counter - 1}`
                }
            )
        });
    counter--;
}

function showPerson() {
    let container2 = document.getElementById('li');
    fetch(`https://swapi.dev/api/people/`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let link = document.createElement('A');
                    link.innerHTML = person.results;
                    container2.appendChild(link);
                }
            )
        })
}