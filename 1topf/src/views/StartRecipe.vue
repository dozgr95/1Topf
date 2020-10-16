<template>
  <div class="easy-recipe">
    <button @click="generateEasyRecipe">
      Rezept für einen kleinen Topf
    </button>
    <button @click="generateAdvancedRecipe">
      Rezept für einen grossen Topf
    </button>
    <br><br>
    <div v-if="getRecipe().veggies.length === 1">
      <b>Einkaufsliste:</b><br>
      1. Zutat: {{ getRecipe().veggies[0].Name }} <br>
      2. Zutat: {{ getRecipe().legumes[0].Name }}  <br>
      3. Zutat: {{ getRecipe().grains[0].Name }} <br>
      4a. Zutat: {{ getRecipe().additionals[0].Name }} <br>
      4b. Zutat: {{ getRecipe().additionals[1].Name }} <br>
    </div>
    <div v-if="getRecipe().veggies.length === 2"> <!-- CONDITION HERE !   -->
      <b>Einkaufsliste: </b><br>
      1a. Zutat: {{ getRecipe().veggies[0].Name }} <br>
      1b. Zutat: {{ getRecipe().veggies[1].Name }} <br>
      2. Zutat: {{ getRecipe().legumes[0].Name }}  <br>
      3. Zutat: {{ getRecipe().grains[0].Name }} <br>
      4a. Zutat: {{ getRecipe().additionals[0].Name }} <br>
      4b. Zutat: {{ getRecipe().additionals[1].Name }} <br>
      4c. Zutat: {{ getRecipe().additionals[2].Name }} <br>
    </div>
    <br>
    <hr>
    <div v-for="tip in getHandlingTips()" :key="tip">
      - {{ tip }}<br>
    </div>
    <hr>
    <process-recipe v-if="getRecipe().veggies.length > 0"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe, Food } from '../store/recipeGenerator';
import ProcessRecipe from './ProcessRecipe.vue';

@Component({
  components: {
    ProcessRecipe,
  },
})
export default class StartRecipe extends Vue {
  public generateEasyRecipe() {
    this.$store.dispatch('generateEasyRecipe');
  }

  public generateAdvancedRecipe() {
    this.$store.dispatch('generateAdvancedRecipe');
  }

  public getHandlingTips(): string[] {
    const tips: string[] = [];
    const recipe: Recipe = this.getRecipe();
    console.log(recipe);
    recipe.veggies.forEach((veggie: Food) => {
      veggie.HandlingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.legumes.forEach((legume: Food) => {
      legume.HandlingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.grains.forEach((grain: Food) => {
      grain.HandlingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.additionals.forEach((additional: Food) => {
      additional.HandlingTips.forEach((tip: string) => tips.push(tip));
    });
    return tips;
  }

  public getRecipe(): Recipe {
    return this.$store.getters.recipe;
  }
}
</script>
