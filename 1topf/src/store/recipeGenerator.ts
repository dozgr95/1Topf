import {
  loadVeggies, loadAdditionals, loadGrains, loadLegumes,
} from './jsonAccessor';

const checkVeggieSeason = (veggie: Veggie): boolean => {
  const date = new Date();
  const month: number = date.getMonth() + 1;
  let isSeason: boolean = veggie.MainSeason.includes(month.toString());
  if (!isSeason) {
    isSeason = veggie.OffSeason !== '';
  }
  return isSeason;
};

const randomFoodSelector = (loadedList: Food[], recipeList: Food[], amount: number) => {
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

export interface Recipe {
    veggies: Veggie[];
    legumes: Legume[];
    grains: Grain[];
    additionals: Additional[];
}

export interface Veggie extends Food {
  MainSeason: string;
  OffSeason: string;
}

export type Legume = Food

export type Grain = Food

export type Additional = Food

export interface Food {
  Name: string;
  HandlingTips: string[];
  roastFirst?: boolean;
  roastSecond?: boolean;
  sauce?: boolean;
  finish?: boolean;
}
