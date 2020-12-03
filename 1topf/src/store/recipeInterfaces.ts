export interface Recipe {
  veggies: Veggie[];
  legumes: Legume[];
  grains: Grain[];
  liquids: Liquid[];
  spices: Spice[];
}

export interface Veggie extends Food {
  mainSeason: string;
  offSeason: string;
}

export type Legume = Food;

export type Grain = Food;

export type Liquid = Food;

export type Spice = Food;
//sauber machen!

export interface Food {
  name: string;
  handlingTips: string[];
  preparationSteps: string[];
  roastFirst?: boolean;
  roastSecond?: boolean;
  sauce?: boolean;
  finish?: boolean;
  pealer?: boolean;
  noPealer?: boolean;
  cutIntoPieces?: boolean;
  preCookerSimpel?: boolean;
  preCookerWithSoak?: boolean;
  dontOverCook?: boolean;
  insideCookerWithWater?: boolean;
}

export interface PreparationSteps {
  general: string[]; // sum of general tips/steps of ingredients
  preCookerWithSoak: string; // chickpeas, soja
  preCookerSimpel: string; // rice, pasta
  noPealer: string; // carrots, zucchetti
  pealer: string; // onions, pumpkins
  cutIntoPieces: string; // veggies, etc
}

export interface CookingSteps {
  oil: string; // oil in pan etc
  roastFirst: string; // e.g. onions
  roastSecond: string; // later added e.g. lentils, flavour, some veggies
  sauce: string; // liquids or spices etc + cook inside
  finish: string; // food added just to heat a bit
  insideCookerWithWater: string; // red lentils, millet
  dontOverCook: string; // carrots,
}
