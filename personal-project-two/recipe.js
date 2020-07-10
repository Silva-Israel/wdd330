export class Recipe {
    constructor(name, ingredients, directions) {
        this.Id = Date.now();
        this.Name = name;
        this.Ingredients = ingredients;
        this.Directions = directions;
    }
}