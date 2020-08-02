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
                //let container = document.getElementById('recipe-list');
                //let list = document.createElement('LI');
                
                document.querySelector('#recipe-list').innerHTML +=
                `<li id="${recipe.Id}">${recipe.Name}</li>`;

                /*
                list.innerHTML = recipe.Name;
                container.appendChild(list);
                */
            }
        );
    }
}

document.querySelector('#recipe-list').addEventListener('click',
    (e) => {
        let recipeId = parseInt(e.target.id);
        let recipe = recipes.find(r => r.Id === recipeId);
        
        if (recipe) {
            document.querySelector('#each-recipe').innerHTML = '';

            for (let property in recipe) {
                let eachRecipe = document.querySelector('#each-recipe');
                eachRecipe.innerHTML = '';
                eachRecipe.innerHTML =
                `<div>
                    <span><strong>Recipe:</strong> </span>
                    <span>${recipe.Name}</span>
                </div>
                <div>
                    <span><strong>Ingredients:</strong> </span>
                    <span>${recipe.Ingredients.join(', ')}</span>
                </div>
                <div>
                    <span><strong>Directions:</strong> </span>
                    <span>${recipe.Directions.join(', ')}</span>
                </div>
                <div>
                    <span><strong>Photo:</strong> </span>
                    <span>Coming soon...</span>
                </div>`;
            }
        }
    });
