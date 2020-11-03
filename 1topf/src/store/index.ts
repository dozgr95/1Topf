import Vue from 'vue';
import Vuex from 'vuex';
import { RecipeFormulator } from './cookingStepsFormulator';
import {
  Additional, generateNewRecipe, Grain, Legume, Recipe, Veggie,
} from './recipeGenerator';

Vue.use(Vuex);

export interface RecipeState{
  veggies: Veggie[];
  legumes: Legume[];
  grains: Grain[];
  additionals: Additional[];
  cookingSteps: string[];
}

export default new Vuex.Store({
  state: {
    veggies: [],
    legumes: [],
    grains: [],
    additionals: [],
    cookingSteps: [],
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
      this.dispatch('generateCookingSteps');
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
      this.dispatch('generateCookingSteps');
    },
    generateCookingSteps() {
      const steps: string[] = RecipeFormulator(this.getters.recipe);
      this.commit('setCookingSteps', steps);
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
  },
  modules: {
  },
});
