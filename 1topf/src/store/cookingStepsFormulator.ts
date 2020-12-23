import { stringConcatRuler, concatFoodList } from './helpers';
import { CookingSteps, Food, Recipe } from './recipeInterfaces';

export const fillInRoastFirst = (foods: Food[]): string => {
  let output = '';
  const RoastFirstList = foods.filter((food) => food.roastFirst);
  output = stringConcatRuler(RoastFirstList);
  if (output) {
    output = `Brate zuerst ${output}`;
  }
  return output;
};

export const fillInRoastSecond = (foods: Food[]): string => {
  let output = '';
  const RoastSecondList = foods.filter((food) => food.roastSecond);
  output = stringConcatRuler(RoastSecondList);
  if (output) {
    output = `Anschliessend brate ${output}`;
  }
  return output;
};

export const fillInSauce = (foods: Food[]): string => {
  let output = '';
  const sauceList = foods.filter((food) => food.sauce);
  output = stringConcatRuler(sauceList);
  if (output) {
    output = `Nun füge ${output} hinzu`;
  }
  return output;
};

export const fillInFinish = (foods: Food[]): string => {
  let output = '';
  const finishList = foods.filter((food) => food.finish);
  output = stringConcatRuler(finishList);
  if (output) {
    output = `Als letzes kommen noch ${output} in die Pfanne. `;
  }
  return output;
};

export const fillInInsideCooker = (foods: Food[]): string => {
  let output = '';
  const insideCookerList = foods.filter((food) => food.insideCookerWithWater);
  output = stringConcatRuler(insideCookerList);
  if (output) {
    output = `${output} mit zusätzlich Wasser in der Pfanne garen. `;
  }
  return output;
};

export const fillInOverCook = (foods: Food[]): string => {
  let output = '';
  const overCookList = foods.filter((food) => food.dontOverCook);
  output = stringConcatRuler(overCookList);
  if (output) {
    output = `Um ${output} weicher zu machen, kann Wasser hinzugegeben werden,
     allerdings können dadurch auch Nährstoffe verloren gehen. `;
  }
  return output;
};

export const RecipeFormulator = (recipe: Recipe): CookingSteps => {
  const foods: Food[] = [];
  concatFoodList(foods, recipe.veggies);
  concatFoodList(foods, recipe.legumes);
  concatFoodList(foods, recipe.grains);
  concatFoodList(foods, recipe.liquids);
  concatFoodList(foods, recipe.spices);
  const cookingSteps: CookingSteps = {
    oil: 'Erwärme Rapsöl in einer grossen Bratpfanne. ',
    roastFirst: fillInRoastFirst(foods),
    roastSecond: fillInRoastSecond(foods),
    sauce: fillInSauce(foods),
    insideCookerWithWater: fillInInsideCooker(foods),
    finish: fillInFinish(foods),
    dontOverCook: fillInOverCook(foods),
  };
  return cookingSteps;
};
