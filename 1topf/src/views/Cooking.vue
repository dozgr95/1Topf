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

}
</script>
