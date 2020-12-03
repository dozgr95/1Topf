import { Food, Recipe } from './recipeInterfaces';

export const concatFoodList = (foods: Food[], recipePart: Food[]) => {
  recipePart.forEach((food) => {
    foods.push(food);
  });
};

export const stringConcatRuler = (foods: Food[]): string => {
  let output = '';
  if (foods.length === 1) {
    output = foods[0].name;
  } else if (foods.length === 2) {
    output = `${foods[0].name} und ${foods[1].name}`;
  } else if (foods.length > 2) {
    let counter = 0;
    while (counter < foods.length) {
      if (counter !== 0) {
        output = `${output}, ${foods[counter].name}`;
      } else {
        output = foods[counter].name;
      }
      counter += 1;
    }
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
  recipe.additionals.forEach((additional) => {
    nameList.push(additional.name);
  });
  // nameList.push('Rapsöl'); added to HTML
  return nameList;
};
