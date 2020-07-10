import { Recipe } from '../personal-project-two/recipe.js';

document.querySelector('#search-bottom').addEventListener('click', saveForm);
document.querySelector('#search-top').addEventListener('click', search);

function saveForm(event) {
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('ingredients-bottom').value;
    let directions = document.getElementById('directions').value;

    let recipe = new Recipe(name, ingredients, directions)

    let recipes = [];

    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
    }

    recipes.push(recipe);

    localStorage.setItem('recipes', JSON.stringify(recipes));

    addRecipe();

    event.preventDefault();
}

function addRecipe() {

}

function search() {
    let searchQuery = document.getElementById('ingredients-top').value;

    let localStorageItem = JSON.parse(localStorage.getItem('recipes'));

    console.log(searchQuery + localStorageItem.Name)
}