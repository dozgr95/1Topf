<template>
  <div class="Process" v-if="true">
    <!-- get recipe and form a description/process for cooking -->
    <button @click="generateCookingSteps">
      Zeig mir das Vorgehen
    </button>
    <br><br>
    <div v-if="getCookingSteps().length > 0">
      <div v-for="step in getCookingSteps()" :key="step">
        <div v-if="step">{{ step }}<br></div>
      </div>
    </div>
    <br>
    <hr>
    <b>Tipps zur Verwendung der Zutaten für den 1Topf:</b>
      <div v-for="tip in getCookingTips()" :key="tip">
        <div v-if="tip">- {{tip}}</div>
      </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Food, Recipe } from '../store/recipeGenerator';

@Component({
  components: {
  },
})
export default class ProcessRecipe extends Vue {
  public generateCookingSteps() {
    this.$store.dispatch('generateCookingSteps');
  }

  public getCookingSteps(): string[] {
    return this.$store.getters.cookingSteps;
  }

  public getRecipe(): Recipe {
    return this.$store.getters.recipe;
  }

  public getCookingTips(): string[] {
    const tips: string[] = [];
    const recipe: Recipe = this.getRecipe();
    recipe.veggies.forEach((veggie: Food) => {
      veggie.CookingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.legumes.forEach((legume: Food) => {
      legume.CookingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.grains.forEach((grain: Food) => {
      grain.CookingTips.forEach((tip: string) => tips.push(tip));
    });
    recipe.additionals.forEach((additional: Food) => {
      additional.CookingTips.forEach((tip: string) => tips.push(tip));
    });
    return tips;
  }
}
</script>
