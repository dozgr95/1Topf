import {
  loadVeggies, loadAdditionals, loadGrains, loadLegumes,
} from './jsonAccessor';

export const generateNewRecipe = (aVeggie: number, aLegume: number,
  aGrains: number, aAdditionals: number) => {
  const newRecipe: Recipe = {
    veggies: [],
    legumes: [],
    grains: [],
    additionals: [],
  };
  console.log('before load');
  const lists: Recipe = {
    veggies: loadVeggies(),
    legumes: loadLegumes(),
    grains: loadGrains(),
    additionals: loadAdditionals(),
  };
  console.log('after load');

  let counter = 0;
  while (aVeggie > counter) {
    const randInd = Math.floor(Math.random() * lists.veggies.length);
    newRecipe.veggies.push(lists.veggies[randInd]);
    lists.veggies.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (aLegume > counter) {
    const randInd = Math.floor(Math.random() * lists.legumes.length);
    newRecipe.legumes.push(lists.legumes[randInd]);
    lists.legumes.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (aGrains > counter) {
    const randInd = Math.floor(Math.random() * lists.grains.length);
    newRecipe.grains.push(lists.grains[randInd]);
    lists.grains.splice(randInd, 1);
    counter = 1 + counter;
  }

  counter = 0;
  while (aAdditionals > counter) {
    const randInd = Math.floor(Math.random() * lists.additionals.length);
    newRecipe.additionals.push(lists.additionals[randInd]);
    lists.additionals.splice(randInd, 1);
    counter = 1 + counter;
  }

  console.log('after loops');

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
