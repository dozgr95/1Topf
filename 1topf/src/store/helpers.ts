import { Food, Recipe } from './recipeInterfaces';

export const concatFoodList = (foods: Food[], recipePart: Food[]) => {
  recipePart.forEach((food) => {
    foods.push(food);
  });
};

export const stringConcatRuler = (foods: string[]): string => {
  let output = '';
  if (foods.length === 1) {
    [output] = foods;
  } else if (foods.length === 2) {
    output = `${foods[0]} und ${foods[1]}`;
  } else if (foods.length > 2) {
    let counter = 0;
    while (counter < foods.length - 1) {
      if (counter !== 0) {
        output = `${output}, ${foods[counter]}`;
      } else {
        output = foods[counter];
      }
      counter += 1;
    }
    output = `${output} und ${foods[counter]}`;
  }
  return output;
};

export const nameLister = (recipe: Recipe): string[] => {
  const nameList: string[] = [];
  recipe.veggies.forEach((veggie) => {
    nameList.push(veggie.name);
  });
  recipe.grains.forEach((grain) => {
    nameList.push(grain.name);
  });
  recipe.legumes.forEach((legume) => {
    nameList.push(legume.name);
  });
  recipe.liquids.forEach((liquid) => {
    nameList.push(liquid.name);
  });
  recipe.spices.forEach((spice) => {
    nameList.push(spice.name);
  });
  // nameList.push('Rapsöl'); added to HTML
  return nameList;
};
