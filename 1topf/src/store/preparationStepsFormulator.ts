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
    onlySoak: '',
    noPealer: '',
    pealer: '',
    cutIntoPieces: '',
  };

  const noPealerFoods = foods.filter((food) => food.noPealer);
  if (noPealerFoods.length > 0) {
    prepartionSteps.noPealer = `${stringConcatRuler(noPealerFoods.map((food) => food.name))}
     müssen nicht geschält werden, waschen reicht. `;
  }

  const preCookerWithSoakFoods = foods.filter((food) => food.preCookerWithSoak);
  if (preCookerWithSoakFoods.length > 0) {
    prepartionSteps.preCookerWithSoak = `${stringConcatRuler(preCookerWithSoakFoods.map((food) => food.name))}
     muss man vorher einweichen und separat kochen. `;
  }

  const onlySoakFoods = foods.filter((food) => food.onlySoak);
  if (onlySoakFoods.length > 0) {
    prepartionSteps.onlySoak = `${stringConcatRuler(onlySoakFoods.map((food) => food.name))}
     sollte man vorher einweichen. `;
  }

  const preCookerSimpelFoods = foods.filter((food) => food.preCookerSimpel);
  if (preCookerSimpelFoods.length > 0) {
    prepartionSteps.preCookerSimpel = `${stringConcatRuler(preCookerSimpelFoods.map((food) => food.name))}
     muss man vorher separat kochen. `;
  }

  const cutIntoPiecesFoods = foods.filter((food) => food.cutIntoPieces);
  if (cutIntoPiecesFoods.length > 0) {
    prepartionSteps.cutIntoPieces = `${stringConcatRuler(cutIntoPiecesFoods.map((food) => food.name))}
     in Stücke schneiden. `;
  }

  const pealerFoods = foods.filter((food) => food.pealer);
  if (pealerFoods.length > 0) {
    prepartionSteps.pealer = `${stringConcatRuler(pealerFoods.map((food) => food.name))}
      schälen. `;
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
