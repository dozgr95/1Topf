import Vue from 'vue';
import Vuex from 'vuex';
import { RecipeFormulator } from './cookingStepsFormulator';
import { nameLister, stringConcatRuler } from './helpers';
import {
  loadGrains, loadLegumes, loadLiquids, loadSpices, loadVeggies,
} from './jsonAccessor';
import { PreparationFormulator } from './preparationStepsFormulator';
import {
  generateNewRecipe, recipeForFoodList,
} from './recipeGenerator';
import {
  Liquid, Spice, CookingSteps, Grain, Legume, PreparationSteps, Recipe, Veggie, Food,
} from './recipeInterfaces';

Vue.use(Vuex);

export interface RecipeState{
  veggies: Veggie[];
  legumes: Legume[];
  grains: Grain[];
  liquids: Liquid[];
  spices: Spice[];
  cookingSteps: string[];
  preparationSteps: string[];
  foodList: string[];
}

export default new Vuex.Store({
  state: {
    veggies: [],
    legumes: [],
    grains: [],
    liquids: [],
    spices: [],
    cookingSteps: [],
    preparationSteps: [],
    foodList: [],
  } as RecipeState,
  mutations: {
    setVeggies(state, veggies: Veggie[]) {
      state.veggies = veggies;
    },
    setLegumes(state, legumes: Legume[]) {
      state.legumes = legumes;
    },
    setGrains(state, grains: Grain[]) {
      state.grains = grains;
    },
    setLiquids(state, liquids: Liquid[]) {
      state.liquids = liquids;
    },
    setSpices(state, spices: Spice[]) {
      state.spices = spices;
    },
    setCookingSteps(state, steps: string[]) {
      state.cookingSteps = steps;
    },
    setPreparationSteps(state, steps: string[]) {
      state.preparationSteps = steps;
    },
    setFoodList(state, names: string[]) {
      state.foodList = names;
    },
    resetRecipe(state) {
      state.grains = [];
      state.legumes = [];
      state.liquids = [];
      state.spices = [];
      state.veggies = [];
      state.preparationSteps = [];
      state.cookingSteps = [];
      state.foodList = [];
    },
  },
  actions: {
    resetRecipe() {
      this.commit('resetRecipe');
    },
    generateEasyRecipe() {
      const {
        veggies,
        legumes,
        grains,
        spices,
        liquids,
      }: Recipe = generateNewRecipe(1, 1, 1, 1, 1);
      this.commit('setVeggies', veggies);
      this.commit('setLegumes', legumes);
      this.commit('setGrains', grains);
      this.commit('setLiquids', liquids);
      this.commit('setSpices', spices);
      this.commit('setFoodList', nameLister({
        veggies, legumes, grains, liquids, spices,
      }));
      this.dispatch('generateCookingSteps');
      this.dispatch('generatePreparationSteps');
    },
    generateAdvancedRecipe() {
      const {
        veggies,
        legumes,
        grains,
        liquids,
        spices,
      }: Recipe = generateNewRecipe(2, 1, 1, 2, 1);
      this.commit('setVeggies', veggies);
      this.commit('setLegumes', legumes);
      this.commit('setGrains', grains);
      this.commit('setLiquids', liquids);
      this.commit('setSpices', spices);
      this.commit('setFoodList', nameLister({
        veggies, legumes, grains, liquids, spices,
      }));
      this.dispatch('generateCookingSteps');
      this.dispatch('generatePreparationSteps');
    },
    createRecipe(_, foods: string[]) {
      const {
        veggies,
        legumes,
        grains,
        spices,
        liquids,
      }: Recipe = recipeForFoodList(foods);

      this.commit('setVeggies', veggies);
      this.commit('setLegumes', legumes);
      this.commit('setGrains', grains);
      this.commit('setLiquids', liquids);
      this.commit('setSpices', spices);
      this.commit('setFoodList', nameLister({
        veggies, legumes, grains, liquids, spices,
      }));

      this.dispatch('generateCookingSteps');
      this.dispatch('generatePreparationSteps');
    },
    generateCookingSteps() {
      const steps: CookingSteps = RecipeFormulator(this.getters.recipe);
      this.commit('setCookingSteps',
        [steps.oil, steps.roastFirst, steps.roastSecond,
          steps.sauce, steps.insideCookerWithWater, steps.dontOverCook, steps.finish]);
    },
    generatePreparationSteps() {
      const steps: PreparationSteps = PreparationFormulator(this.getters.recipe);
      const stepStrings: string[] = [];
      steps.general.forEach((step) => {
        stepStrings.push(step);
      });
      stepStrings.push(steps.onlySoak);
      stepStrings.push(steps.preCookerWithSoak);
      stepStrings.push(steps.preCookerSimpel);
      stepStrings.push(steps.pealer);
      stepStrings.push(steps.noPealer);
      stepStrings.push(steps.cutIntoPieces);
      this.commit('setPreparationSteps', stepStrings);
    },
  },
  getters: {
    recipe(state): Recipe {
      return {
        veggies: state.veggies,
        legumes: state.legumes,
        grains: state.grains,
        liquids: state.liquids,
        spices: state.spices,
      };
    },
    cookingSteps(state): string[] {
      return state.cookingSteps;
    },
    preparationSteps(state): string[] {
      return state.preparationSteps;
    },
    foodList(state): string[] {
      return state.foodList;
    },
    ingredients(): string[] {
      let ingredients: Food[] = loadGrains();
      ingredients = ingredients.concat(loadLegumes());
      ingredients = ingredients.concat(loadLiquids());
      ingredients = ingredients.concat(loadSpices());
      ingredients = ingredients.concat(loadVeggies());
      return ingredients.map((ingredient) => ingredient.name);
    },
    completnessMessage(state): string {
      if (state.foodList.length === 0) {
        return '';
      }
      const missing: string[] = [];
      if (state.grains.length <= 0) {
        missing.push('Getreide');
      }
      if (state.veggies.length <= 0) {
        missing.push('Gemüse');
      }
      if (state.legumes.length <= 0) {
        missing.push('Hülsefrucht');
      }
      if (missing.length === 0) {
        return '';
      }
      let message = 'Dein Rezept klingt toll! Es ist allerdings nicht ganz vollwertig. Versuche noch ';
      message += stringConcatRuler(missing);
      message += ' hinzuzufügen. ';
      return message;

      /* there could be a message for season veggies check */
    },
  },
  modules: {

  },
});
