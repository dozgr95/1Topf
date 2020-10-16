// import types

import { Recipe } from './recipeGenerator';

export const RecipeFormulator = (recipe: Recipe) => {
  // set CookingSteps from recipe
  // concat each step
  const cookingSteps: CookingSteps = {
    preparation: 'Nimm eine Bratpfanne und benutze (genügend) Rapsöl. ',
    roastFirst: 'Brate dingsbums',
    roastSecond: 'Anschliessend brate bumsdings',
    sauce: 'Nimm flüssigkeiten um eine Art Sauce zu machen. ',
    finish: `Am Schluss füge noch xy hinzu ${recipe.veggies[0].Name}`,
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
