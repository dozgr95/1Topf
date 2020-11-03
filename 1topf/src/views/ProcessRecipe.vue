<template>
  <div class="Process">
    <div class="prep">
    <b>Vorbereitung:</b>
      <div v-for="tip in getPreparationSteps()" :key="tip">
        <div v-if="tip">- {{tip}}</div>
      </div>
    </div>
    <br>
    <div v-if="getCookingSteps().length > 0">
      <b>Zubereitung:</b>
      <div v-for="step in getCookingSteps()" :key="step">
        <div v-if="step">{{ step }}<br></div>
      </div>
    </div>
    <br>
    <hr>

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
  public getCookingSteps(): string[] {
    return this.$store.getters.cookingSteps;
  }

  public getRecipe(): Recipe {
    return this.$store.getters.recipe;
  }

  public getPreparationSteps(): string[] {
    const tips: string[] = [];
    const recipe: Recipe = this.getRecipe();
    recipe.veggies.forEach((veggie: Food) => {
      veggie.PreparationSteps.forEach((tip: string) => tips.push(tip));
    });
    recipe.legumes.forEach((legume: Food) => {
      legume.PreparationSteps.forEach((tip: string) => tips.push(tip));
    });
    recipe.grains.forEach((grain: Food) => {
      grain.PreparationSteps.forEach((tip: string) => tips.push(tip));
    });
    recipe.additionals.forEach((additional: Food) => {
      additional.PreparationSteps.forEach((tip: string) => tips.push(tip));
    });
    return tips;
  }
}
</script>
