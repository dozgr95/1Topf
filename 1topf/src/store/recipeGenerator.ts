import {
  loadVeggies, loadAdditionals, loadGrains, loadLegumes,
} from './jsonAccessor';
import { Veggie, Food, Recipe } from './recipeInterfaces';

export const checkVeggieSeason = (veggie: Veggie): boolean => {
  const date = new Date();
  const month: number = date.getMonth() + 1;
  let isSeason: boolean = veggie.mainSeason.includes(month.toString());
  if (!isSeason) {
    isSeason = veggie.offSeason !== '';
  }
  return isSeason;
};

export const randomFoodSelector = (loadedList: Food[], recipeList: Food[], amount: number) => {
  let counter = 0;
  while (amount > counter) {
    const randInd = Math.floor(Math.random() * loadedList.length);
    recipeList.push(loadedList[randInd]);
    loadedList.splice(randInd, 1);
    counter = 1 + counter;
  }
};

export const generateNewRecipe = (veggieAmount: number, legumeAmount: number,
  grainAmount: number, additionalAmount: number) => {
  const newRecipe: Recipe = {
    veggies: [],
    legumes: [],
    grains: [],
    additionals: [],
  };
  const lists: Recipe = {
    veggies: loadVeggies(),
    legumes: loadLegumes(),
    grains: loadGrains(),
    additionals: loadAdditionals(),
  };

  // filter season
  const seasonVeggies = lists.veggies.filter((veggie) => checkVeggieSeason(veggie));

  randomFoodSelector(seasonVeggies, newRecipe.veggies, veggieAmount);
  randomFoodSelector(lists.legumes, newRecipe.legumes, legumeAmount);
  randomFoodSelector(lists.grains, newRecipe.grains, grainAmount);
  randomFoodSelector(lists.additionals, newRecipe.additionals, additionalAmount);

  return newRecipe;
};
