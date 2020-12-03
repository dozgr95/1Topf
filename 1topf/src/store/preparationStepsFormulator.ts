import { concatFoodList, stringConcatRuler } from './helpers';
import { Food, PreparationSteps, Recipe } from './recipeInterfaces';

export const PreparationFormulator = (recipe: Recipe): PreparationSteps => {
  const foods: Food[] = [];
  concatFoodList(foods, recipe.veggies);
  concatFoodList(foods, recipe.legumes);
  concatFoodList(foods, recipe.grains);
  concatFoodList(foods, recipe.liquids);
  concatFoodList(foods, recipe.spices);
  const prepartionSteps: PreparationSteps = {
    general: [],
    preCookerSimpel: '',
    preCookerWithSoak: '',
    noPealer: '',
    pealer: 'pealer',
    cutIntoPieces: 'cut into pieces please',
  };

  const noPealerFoods = foods.filter((food) => food.noPealer);
  if (noPealerFoods.length > 0) {
    prepartionSteps.noPealer = `${stringConcatRuler(noPealerFoods)}
     müssen nicht geschält werden, waschen reicht. `;
  }

  const preCookerWithSoakFoods = foods.filter((food) => food.preCookerWithSoak);
  if (preCookerWithSoakFoods.length > 0) {
    prepartionSteps.preCookerWithSoak = `${stringConcatRuler(preCookerWithSoakFoods)}
     muss man vorher einweichen und separat kochen. `;
  }

  const preCookerSimpelFoods = foods.filter((food) => food.preCookerSimpel);
  if (preCookerSimpelFoods.length > 0) {
    prepartionSteps.preCookerSimpel = `${stringConcatRuler(preCookerSimpelFoods)}
     muss man vorher separat kochen. `;
  }

  foods.forEach((food) => {
    food.preparationSteps.forEach((step) => {
      prepartionSteps.general.push(step);
    });
  });
  return prepartionSteps;
};

export const someFunction = () => {
  const shit = true;
  return shit;
};
