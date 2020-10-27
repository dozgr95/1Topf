import { Food, Recipe } from './recipeGenerator';

const concatFoodList = (foods: Food[], recipePart: Food[]) => {
  recipePart.forEach((food) => {
    foods.push(food);
  });
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
      } else {
        output = foods[counter].Name;
      }
      counter += 1;
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

const fillInRoastSecond = (foods: Food[]): string => {
  let output = '';
  const roastSecondList = foods.filter((food) => food.roastSecond);
  output = stringConcatRuler(roastSecondList);
  if (output) {
    output = `Anschliessend brate ${output}`;
  }
  return output;
};

const fillInSauce = (foods: Food[]): string => {
  let output = '';
  const sauceList = foods.filter((food) => food.sauce);
  output = stringConcatRuler(sauceList);
  if (output) {
    output = `Nun füge ${output} hinzu`;
  }
  return output;
};

const fillInFinish = (foods: Food[]): string => {
  let output = '';
  const finishList = foods.filter((food) => food.finish);
  output = stringConcatRuler(finishList);
  if (output) {
    output = `Als letzes kommen noch ${output} in die Pfanne. `;
  }
  return output;
};

export const RecipeFormulator = (recipe: Recipe) => {
  const foods: Food[] = [];
  concatFoodList(foods, recipe.veggies);
  concatFoodList(foods, recipe.legumes);
  concatFoodList(foods, recipe.grains);
  concatFoodList(foods, recipe.additionals);
  const cookingSteps: CookingSteps = {
    preparation: 'Erwärme Rapsöl in einer grossen Bratpfanne. ',
    roastFirst: fillInRoastFirst(foods),
    roastSecond: fillInRoastSecond(foods),
    sauce: fillInSauce(foods),
    finish: fillInFinish(foods),
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
