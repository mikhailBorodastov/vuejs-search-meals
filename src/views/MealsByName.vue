<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-1 border-gray-200 w-full"
           placeholder="Search for Meals" v-model="keyword" @change="searchMeals">
    <div>
      {{ meals.length ? '' : 'Just type something like egg, salmon, beef, etc..' }}
    </div>
  </div>

  <Meals :meals="meals"/>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import store from "../store/index.js";
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>

