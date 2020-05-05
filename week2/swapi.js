// Functions to call swapi API

function personCall() {
    fetch(`https://swapi.dev/api/people/${document.getElementById('inputPerson').value}/`)
    .then(result => result.json())
    .then(response => {
        document.getElementById('person')
            .innerHTML = response.name;
    });
}

function starshipCall() {
    fetch(`https://swapi.dev/api/starships/${document.getElementById('inputStarship').value}/`)
    .then(result => result.json())
    .then(response => {
        document.getElementById('starship')
            .innerHTML = response.name;
    });
}

function planetCall() {
    fetch(`https://swapi.dev/api/planets/${document.getElementById('inputPlanet').value}/`)
    .then(result => result.json())
    .then(response => {
        document.getElementById('planet')
            .innerHTML = response.name;
    });
}
