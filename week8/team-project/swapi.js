let counter;
let container = document.querySelector('ul');
let page = document.getElementById('page');
let para = document.createElement('P');

function nextCall() {
    container.innerHTML = '';
    para.innerHTML = '';

    fetch(`https://swapi.dev/api/people/?page=${counter}`)
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

                    page.innerHTML = `Page ${counter - 1}`
                }
            )
        })
    counter++;
}

function personCall() {
    counter = 1;
    container.innerHTML = '';
    para.innerHTML = '';

    
    fetch('https://swapi.dev/api/people/?page=1')
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
                     
                    page.innerHTML = `Page ${counter - 1}`
                }
            )
        })
    counter++;
}

function previousCall() {
    container.innerHTML = '';
    para.innerHTML = '';
    fetch(`https://swapi.dev/api/people/?page=${counter - 2}`)
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
                    
                    para.innerHTML = person.name;
                    container2.appendChild(para);
                }
            )
        })
}
