let recipes = [];
let localStorageItem = JSON.parse(localStorage.getItem('recipes'));

window.addEventListener('load', loadRecipe);

function loadRecipe() {
    if (localStorage.recipes) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
        
        showRecipes();
    }
}

function showRecipes() {
    if (recipes.length > 0) {
        recipes.forEach(
            recipe => {
                let container = document.getElementById('recipe-list');
                let list = document.createElement('LI');
                let onclick = 'onclick="showEachRecipe(); return false"';

                //list.innerHTML = `<a href="${showEachRecipe}">${recipe.Name}</a>`;
                list.innerHTML = `<a href="#" ${onclick}>${recipe.Name}</a>`;
                container.appendChild(list);
            }
        );
    }
}

function showEachRecipe() {
    let allRecipes = document.getElementById('all-recipes');
    let eachRecipe = document.getElementById('each-recipe');
    
    eachRecipe.style.display = 'block';
    allRecipes.style.display = 'none';

    let container = document.getElementById('each-recipe');
    let node = document.createElement('P');
    node.innerHTML = `<p>${recipes.Name}</p>`;

    container.appendChild(node);
}