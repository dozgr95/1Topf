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
  console.log(seasonVeggies);
  let counter = 0;
  while (veggieAmount > counter) {
    const randInd = Math.floor(Math.random() * seasonVeggies.length);
    newRecipe.veggies.push(seasonVeggies[randInd]);
    seasonVeggies.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (legumeAmount > counter) {
    const randInd = Math.floor(Math.random() * lists.legumes.length);
    newRecipe.legumes.push(lists.legumes[randInd]);
    lists.legumes.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (grainAmount > counter) {
    const randInd = Math.floor(Math.random() * lists.grains.length);
    newRecipe.grains.push(lists.grains[randInd]);
    lists.grains.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (additionalAmount > counter) {
    const randInd = Math.floor(Math.random() * lists.additionals.length);
    newRecipe.additionals.push(lists.additionals[randInd]);
    lists.additionals.splice(randInd, 1);
    counter = 1 + counter;
  }

  return newRecipe;
};

export interface Recipe {
    veggies: Veggie[];
    legumes: Legume[];
    grains: Grain[];
    additionals: Additional[];
}

export interface Veggie {
  Name: string;
  MainSeason: string;
  OffSeason: string;
}

export interface Legume {
  Name: string;
}

export interface Grain {
  Name: string;
}

export interface Additional {
  Name: string;
}
