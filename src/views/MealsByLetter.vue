<template>
  <div>
    <div class="flex flex-wrap justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
  <div>
    <Meals :meals="meals"/>
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import Meals from "../components/Meals.vue";

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ'.split('');
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

