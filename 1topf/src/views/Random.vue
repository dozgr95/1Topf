<template>
  <div class="random-recipe">
    <v-btn @click="generateEasyRecipe">
      Rezept für einen kleinen Topf
    </v-btn>
    <v-btn @click="generateAdvancedRecipe">
      Rezept für einen grossen Topf
    </v-btn>
    <p><i v-if="foodList().length > 0">
      Übrigens: Das Rezept ist zufällig erstellt.
       Du magst es nicht? Drücke nochmal :)
    </i></p>
    <RecipeDisplay />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeDisplay from './RecipeDisplay.vue';

@Component({
  components: {
    RecipeDisplay,
  },
})
export default class RandomRecipe extends Vue {
  public foodList(): string[] {
    return this.$store.getters.foodList;
  }
}
</script>
