import Vue from 'vue';
import Vuex from 'vuex';
import { RecipeFormulator } from './cookingStepsFormulator';
import { nameLister } from './helpers';
import { PreparationFormulator } from './preparationStepsFormulator';
import {
  generateNewRecipe,
} from './recipeGenerator';
import {
  Additional, CookingSteps, Grain, Legume, PreparationSteps, Recipe, Veggie,
} from './recipeInterfaces';

Vue.use(Vuex);

export interface RecipeState{
  veggies: Veggie[];
  legumes: Legume[];
  grains: Grain[];
  additionals: Additional[];
  cookingSteps: string[];
  preparationSteps: string[];
  foodList: string[];
}

export default new Vuex.Store({
  state: {
    veggies: [],
    legumes: [],
    grains: [],
    additionals: [],
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
    setAdditionals(state, additionals: Additional[]) {
      state.additionals = additionals;
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
  },
  actions: {
    generateEasyRecipe() {
      const {
        veggies,
        legumes,
        grains,
        additionals,
      }: Recipe = generateNewRecipe(1, 1, 1, 2);
      this.commit('setVeggies', veggies);
      this.commit('setLegumes', legumes);
      this.commit('setGrains', grains);
      this.commit('setAdditionals', additionals);
      this.commit('setFoodList', nameLister({
        veggies, legumes, grains, additionals,
      }));
      this.dispatch('generateCookingSteps');
      this.dispatch('generatePreparationSteps');
    },
    generateAdvancedRecipe() {
      const {
        veggies,
        legumes,
        grains,
        additionals,
      }: Recipe = generateNewRecipe(2, 1, 1, 3);
      this.commit('setVeggies', veggies);
      this.commit('setLegumes', legumes);
      this.commit('setGrains', grains);
      this.commit('setAdditionals', additionals);
      this.commit('setFoodList', nameLister({
        veggies, legumes, grains, additionals,
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
        additionals: state.additionals,
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
  },
  modules: {

  },
});
