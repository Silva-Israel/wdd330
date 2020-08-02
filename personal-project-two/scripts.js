import { Recipe } from '../personal-project-two/recipe.js';

let recipes = [];
let localStorageItem = JSON.parse(localStorage.getItem('recipes'));

document.querySelector('#search-bottom').addEventListener('click', saveForm);
document.querySelector('#search-top').addEventListener('click', search);

function saveForm(event) {
    let ingredients = [];
    let directions = [];

    let name = document.getElementById('recipe-name').value;
    ingredients = document.getElementById('ingredients-bottom').value.split("\n");
    directions = document.getElementById('directions').value.split("\n");

    let recipe = new Recipe(name, ingredients, directions)

    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
    }

    recipes.push(recipe);

    localStorage.setItem('recipes', JSON.stringify(recipes));

    document.querySelector('#recipe-name').value = '';
    document.querySelector('#ingredients-bottom').value = '';
    document.querySelector('#directions').value = '';

    event.preventDefault();
}

function search() {
    let searchQuery = document.getElementById('ingredients-top').value;

    localStorageItem.forEach(
        item => {
            if (item.Ingredients.includes(searchQuery)) {
                document.getElementById('test').innerHTML = `
                <p>These recipes can be prepared with the ingredients you input:</p>
                <a href="#">${item.Name}</a>`;
            }
        }
    );
}