// import types

import { Food, Recipe } from './recipeGenerator';

const concatFoodList = (foods: Food[], recipePart: Food[]): Food[] => {
  recipePart.forEach((food) => {
    foods.push(food);
  });
  return foods;
};

const stringConcatRuler = (foods: Food[]): string => {
  let output = '';
  if (foods.length === 1) {
    output = foods[0].Name;
  } else if (foods.length === 2) {
    output = `${foods[0].Name} und ${foods[1].Name}`;
  } else if (foods.length > 2) {
    let counter = 0;
    while (counter < foods.length) {
      if (counter !== 0) {
        output = `${output}, ${foods[counter].Name}`;
        counter += 1;
      } else {
        output = foods[counter].Name;
      }
    }
  }
  return output;
};

const fillInRoastFirst = (foods: Food[]): string => {
  let output = '';
  const roastFirstList = foods.filter((food) => food.roastFirst);
  output = stringConcatRuler(roastFirstList);
  if (output) {
    output = `Brate zuerst ${output}`;
  }
  return output;
};

export const RecipeFormulator = (recipe: Recipe) => {
  let foods: Food[] = [];
  foods = concatFoodList(foods, recipe.veggies);
  foods = concatFoodList(foods, recipe.legumes);
  foods = concatFoodList(foods, recipe.grains);
  foods = concatFoodList(foods, recipe.additionals);

  // concat each step
  const cookingSteps: CookingSteps = {
    preparation: 'Erwärme Rapsöl in einer grossen Bratpfanne. ',
    roastFirst: `${fillInRoastFirst(foods)}`,
    roastSecond: `Anschliessend brate ${recipe.veggies[0].Name}`,
    sauce: `Nun füge ${recipe.veggies[0].Name} hinzu. `,
    finish: `Als letzes kommen noch ${recipe.veggies[0].Name} in die Pfanne. `,
  };

  return [cookingSteps.preparation, cookingSteps.roastFirst,
    cookingSteps.roastSecond, cookingSteps.sauce, cookingSteps.finish];
};

export interface CookingSteps {
  preparation: string; // oil in pan etc
  roastFirst: string; // e.g. onions
  roastSecond: string; // later added e.g. lentils, flavour, some veggies
  sauce: string; // liquids maybe
  finish: string; // food added just to heat a bit
}
