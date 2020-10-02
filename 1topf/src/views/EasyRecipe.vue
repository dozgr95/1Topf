<template>
  <div class="easy-recipe">
    <button @click="generateRecipe">
      Generiere ein einfaches Rezept
    </button>
    <div v-if="getRecipe().veggies.length > 0">
      1. Zutat: {{ getRecipe().veggies[0].Name }} <br>
      2. Zutat: {{ getRecipe().legumes[0].Name }}  <br>
      3. Zutat: {{ getRecipe().grains[0].Name }} <br>
      4. Zutat: {{ getRecipe().additionals[0].Name }} <br>
      5. Zutat: {{ getRecipe().additionals[1].Name }} <br>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe } from '../store/recipeGenerator';

@Component({
  components: {
  },
})
export default class EasyRecipe extends Vue {
  public generateRecipe() {
    this.$store.dispatch('generateEasyRecipe');
  }

  public getRecipe(): Recipe {
    return this.$store.getters.recipe;
  }
}
</script>
