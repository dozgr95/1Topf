import {
  loadVeggies, loadLiquids, loadSpices, loadGrains, loadLegumes,
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
  const listCopy = [...loadedList];
  let counter = 0;
  while (amount > counter) {
    const randInd = Math.floor(Math.random() * listCopy.length);
    recipeList.push(listCopy[randInd]);
    listCopy.splice(randInd, 1);
    counter = 1 + counter;
  }
};

export const generateNewRecipe = (veggieAmount: number, legumeAmount: number,
  grainAmount: number, spiceAmount: number, liquidAmount: number) => {
  const newRecipe: Recipe = {
    veggies: [],
    legumes: [],
    grains: [],
    liquids: [],
    spices: [],
  };
  const lists: Recipe = {
    veggies: loadVeggies(),
    legumes: loadLegumes(),
    grains: loadGrains(),
    liquids: loadLiquids(),
    spices: loadSpices(),
  };

  // filter season
  const seasonVeggies = lists.veggies.filter((veggie) => checkVeggieSeason(veggie));
  randomFoodSelector(seasonVeggies, newRecipe.veggies, veggieAmount);
  randomFoodSelector(lists.legumes, newRecipe.legumes, legumeAmount);
  randomFoodSelector(lists.grains, newRecipe.grains, grainAmount);
  randomFoodSelector(lists.spices, newRecipe.spices, spiceAmount);
  randomFoodSelector(lists.liquids, newRecipe.liquids, liquidAmount);
  return newRecipe;
};
