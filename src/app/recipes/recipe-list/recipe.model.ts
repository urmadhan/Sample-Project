import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePaath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePaath = imagePath;
        this.ingredients= ingredients;
    }
}