<template>
  <div>
    <v-autocomplete
      v-model="recipe"
      :items="ingredients"
      outlined
      label="Zutat"
      multiple
    ></v-autocomplete>
    <v-btn @click="createRecipe">
      Bestätigen
    </v-btn>
    <div class="completness" v-if="recipeCompletnesMessage()">
      {{ recipeCompletnesMessage() }}
    </div>
    <RecipeDisplay />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import App from '../App.vue';
import RecipeDisplay from './RecipeDisplay.vue';

@Component({
  components: {
    RecipeDisplay,
    App,
  },
})
export default class RecipeCreator extends Vue {
  public async mounted() {
    await this.$store.dispatch('resetRecipe');
    this.ingredients = this.$store.getters.ingredients;
  }

  public async createRecipe() {
    await this.$store.dispatch('createRecipe', this.recipe);
  }

  public recipeCompletnesMessage() {
    return this.$store.getters.completnessMessage;
  }

  public ingredients = [];

  public recipe: string[] = []
}
</script>
