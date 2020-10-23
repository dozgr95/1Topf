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
    Tipps zur Verwendung der Zutaten für den 1Topf:
      tbd
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
  public generateCookingSteps() {
    this.$store.dispatch('generateCookingSteps');
  }

  public getCookingSteps(): string[] {
    return this.$store.getters.cookingSteps;
  }
}
</script>
