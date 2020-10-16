<template>
  <div class="Process">
    tbd option to select food
    <process-recipe />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe } from '../store/recipeGenerator';
import ProcessRecipe from './ProcessRecipe.vue';

@Component({
  components: {
    ProcessRecipe,
  },
})
export default class Cooking extends Vue {
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
