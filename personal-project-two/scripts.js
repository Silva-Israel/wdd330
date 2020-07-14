import { Recipe } from '../personal-project-two/recipe.js';

let recipes = [];
let localStorageItem = JSON.parse(localStorage.getItem('recipes'));

document.querySelector('#search-bottom').addEventListener('click', saveForm);
document.querySelector('#search-top').addEventListener('click', search);

function saveForm(event) {
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('ingredients-bottom').value;
    let directions = document.getElementById('directions').value;

    let recipe = new Recipe(name, ingredients, directions)

    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
    }

    recipes.push(recipe);

    localStorage.setItem('recipes', JSON.stringify(recipes));

    event.preventDefault();
}

function search() {
    let searchQuery = document.getElementById('ingredients-top').value;

    localStorageItem.forEach(
        item => {
            if (item.Ingredients.includes(searchQuery)) {
                document.getElementById('test').innerHTML = `<a href="#">${item.Name}</a>`;
            }
        }
    )
}