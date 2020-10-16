<template>
  <div class="Process">
    tbd option to select food
    <process-recipe v-if="getRecipe().veggies.length > 0"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe, Food } from '../store/recipeGenerator';

@Component({
  components: {
  },
})
export default class ProcessRecipe extends Vue {
  public generateCookingSteps() {
    this.$store.dispatch('generateCookingSteps');
  }

  public getRecipe(): Recipe {
    return this.$store.getters.recipe;
  }

  public getCookingSteps(): string[] {
    return this.$store.getters.cookingSteps;
  }
}
</script>
