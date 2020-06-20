let counter;
let container = document.querySelector('ul');
let page = document.getElementById('page');
let para = document.createElement('P');

function nextCall() {
    container.innerHTML = '';
    para.innerHTML = '';
    let offsetNext = `?offset=${20 * counter}&limit=20`;
    counter++;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${offsetNext}`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);

                    li.onclick = function showPerson() {
                        para.innerHTML = 
                            `<strong>Name: </strong>${person.name}
                            </br>
                            <strong>Year of birth: </strong>${person.birth_year}
                            </br>
                            <strong>Height: </strong>${person.height}
                            <br>
                            <strong>Eye color: </strong>${person.eye_color}
                            <br>
                            <strong>Hair color: </strong>${person.hair_color}
                            `;
                        container.appendChild(para);
                    }
                    
                    container.appendChild(li);

                    page.innerHTML = `Page ${counter}`
                }
            )
        })
}

function personCall() {
    counter = 1;
    container.innerHTML = '';
    para.innerHTML = '';
    
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);

                    li.onclick = function showPerson() {
                        para.innerHTML = 
                            `<strong>Name: </strong>${person.name}
                            </br>
                            <strong>Year of birth: </strong>${person.birth_year}
                            </br>
                            <strong>Height: </strong>${person.height}
                            <br>
                            <strong>Eye color: </strong>${person.eye_color}
                            <br>
                            <strong>Hair color: </strong>${person.hair_color}
                            `;
                        container.appendChild(para);
                    }
                    container.appendChild(li);
                     
                    page
                    .innerHTML = `Page ${counter}`
                }
            )
        })
}

function previousCall() {
    container.innerHTML = '';
    para.innerHTML = '';
    counter--;
    let offsetBack = `?offset=${20 * counter - 20}&limit=20`;
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${offsetBack}`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);

                    li.onclick = function showPerson() {
                        para.innerHTML = 
                            `<strong>Name: </strong>${person.name}
                            </br>
                            <strong>Year of birth: </strong>${person.birth_year}
                            </br>
                            <strong>Height: </strong>${person.height}
                            <br>
                            <strong>Eye color: </strong>${person.eye_color}
                            <br>
                            <strong>Hair color: </strong>${person.hair_color}
                            `;
                        container.appendChild(para);
                    }
                    
                    container.appendChild(li);

                    page.innerHTML = ` Page ${counter}`
                }
            )
        });
}

function showPerson() {
    let container2 = document.getElementById('li');
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    para.innerHTML = person.name;
                    container2.appendChild(para);
                }
            )
        })
}
