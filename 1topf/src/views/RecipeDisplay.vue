<template>
  <div class="recipe-display">
    <div>
      <br><b v-if="foodList().length > 0">Zutatenliste:</b>
      <span v-for="(food, i) in foodList()" :key="food+i">
        {{food}},
      </span><span v-if="foodList().length > 0">Rapsöl</span>
    </div>
    <br>
    <process-recipe />
    <br>
    <div class="storage-button">
      <v-btn @click="showHandlingTips = !showHandlingTips">
        Einkaufstipps
      </v-btn>
    </div>
    <div v-if="showHandlingTips">
      <br>
      <div>
        <b>Tipps Einkauf und Lagerung:</b>
      </div>
      <div v-for="(tip, i) in getHandlingTips()" :key="tip+i">
        - {{ tip }}<br>
      </div>
    </div>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe, Food } from '../store/recipeInterfaces';
import ProcessRecipe from './ProcessRecipe.vue';

@Component({
  components: {
    ProcessRecipe,
  },
})
export default class RecipeDisplay extends Vue {
    public showHandlingTips = false;

    public foodList(): string[] {
      return this.$store.getters.foodList;
    }

    public generateEasyRecipe() {
      this.$store.dispatch('generateEasyRecipe');
    }

    public generateAdvancedRecipe() {
      this.$store.dispatch('generateAdvancedRecipe');
    }

    public getHandlingTips(): string[] {
      const tips: string[] = [];
      const recipe: Recipe = this.getRecipe();
      recipe.veggies.forEach((veggie: Food) => {
        veggie.handlingTips.forEach((tip: string) => tips.push(tip));
      });
      recipe.legumes.forEach((legume: Food) => {
        legume.handlingTips.forEach((tip: string) => tips.push(tip));
      });
      recipe.grains.forEach((grain: Food) => {
        grain.handlingTips.forEach((tip: string) => tips.push(tip));
      });
      recipe.liquids.forEach((liquid: Food) => {
        liquid.handlingTips.forEach((tip: string) => tips.push(tip));
      });
      recipe.spices.forEach((spice: Food) => {
        spice.handlingTips.forEach((tip: string) => tips.push(tip));
      });
      return tips;
    }

    public getRecipe(): Recipe {
      return this.$store.getters.recipe;
    }
}
</script>
