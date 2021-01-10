<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12">
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
        </v-col>
      </v-row>
    </v-container>
    <RecipeDisplay />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeDisplay from './RecipeDisplay.vue';

@Component({
  components: {
    RecipeDisplay,
  },
})
export default class RecipeCreator extends Vue {
  public mounted() {
    this.ingredients = this.$store.getters.ingredients;
  }

  public async createRecipe() {
    await this.$store.dispatch('createRecipe', this.recipe);
  }

  public ingredients = [];

  public recipe: string[] = []
}
</script>
