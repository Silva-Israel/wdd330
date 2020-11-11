let counter;
let container = document.querySelector('ul');
let page = document.getElementById('page');
let para = document.createElement('P');
let url = "https://pokeapi.co/api/v2/pokemon/";
let id;

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
                    let poke = person.url;
                    let pokeid = poke.split('/');
                    let pokemonid = pokeid[6];
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);
                    li.onclick = function showPerson() {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
                            .then(result => result.json())
                            .then(response => {
                                para.innerHTML =
                                    `<strong>Name: </strong>${response.name}
                                    </br>
                                    <strong>Order: </strong>${response.id}
                                    </br>
                                    <img src="${response.sprites.front_default}">
                                    `;
                                container.appendChild(para);
                            });
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

    fetch(url)
        .then(result => result.json())
        .then(response => {
            response.results.forEach(
                person => {
                    let poke = person.url;
                    let pokeid = poke.split('/');
                    let pokemonid = pokeid[6];
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);
                    li.onclick = function showPerson() {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
                            .then(result => result.json())
                            .then(response => {
                                para.innerHTML =
                                    `<strong>Name: </strong>${response.name}
                                    </br>
                                    <strong>Id: </strong>${response.id}
                                    </br>
                                    <img src="${response.sprites.front_default}">
                                    `;
                                container.appendChild(para);
                            });
                    }

                    container.appendChild(li);

                    page.innerHTML = `Page ${counter}`
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
                    let poke = person.url;
                    let pokeid = poke.split('/');
                    let pokemonid = pokeid[6];
                    let li = document.createElement('LI');
                    let linkText = document.createTextNode(person.name);
                    li.appendChild(linkText);
                    li.onclick = function showPerson() {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
                            .then(result => result.json())
                            .then(response => {
                                para.innerHTML =
                                    `<strong>Name: </strong>${response.name}
                                    </br>
                                    <strong>Order: </strong>${response.id}
                                    </br>
                                    <img src="${response.sprites.front_default}">
                                    `;
                                container.appendChild(para);
                            });
                    }
                    container.appendChild(li);

                    page.innerHTML = ` Page ${counter}`
                }
            )
        });
}


function showPerson() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
        .then(result => result.json())
        .then(response => {
            para.innerHTML =
                `<strong>Name: </strong>${response.name}
                    </br>
                    <strong>Order: </strong>${response.id}
                    </br>
                    <img src="${response.sprites.front_default}">
                    `;
            container.appendChild(para);
        });
}
