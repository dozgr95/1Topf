<template>
  <div class="Process">
    <div class="prep" v-if="getPreparationSteps().length > 0">
    <b>Vorbereitung:</b>
      <div v-for="(prepStep, i) in getPreparationSteps()" :key="prepStep+i">
        <div v-if="prepStep">- {{prepStep}}</div>
      </div>
    </div>
    <br>
    <div v-if="getCookingSteps().length > 0">
      <b>Zubereitung:</b>
      <div v-for="(cookStep, i) in getCookingSteps()" :key="cookStep+i">
        <div v-if="cookStep">{{ cookStep }}<br></div>
      </div>
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class ProcessRecipe extends Vue {
  public getCookingSteps(): string[] {
    return this.$store.getters.cookingSteps;
  }

  public getPreparationSteps(): string[] {
    return this.$store.getters.preparationSteps;
  }
}
</script>
