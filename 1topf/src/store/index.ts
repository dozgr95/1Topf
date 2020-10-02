import Vue from 'vue';
import Vuex from 'vuex';
import { generateNewRecipe, Recipe } from './recipeGenerator';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    veggies: [],
    legumes: [],
    grains: [],
    additionals: [],
  },
  mutations: {
    setVeggies(state, veggies) {
      state.veggies = veggies;
    },
    setLegumes(state, legumes) {
      state.legumes = legumes;
    },
    setGrains(state, grains) {
      state.grains = grains;
    },
    setAdditionals(state, additionals) {
      state.additionals = additionals;
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
  },
  modules: {
  },
});
