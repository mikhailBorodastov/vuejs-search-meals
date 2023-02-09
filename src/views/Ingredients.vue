<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input type="text" class="rounded border-1 border-gray-200 w-full mb-3"
           placeholder="Search for Ingredients" v-model="keyword">
    <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" class="block bg-white rounded p-3 mb-3 shadow">
      <h3 class="text-2xl font-bold mb-2"> {{ ingredient.strIngredient }} </h3>
      <p> {{ ingredient.strDescription }} </p>
    </router-link>
  </div>
</template>

<script setup>
  import {ref, onMounted, computed} from "vue";
  import store from "../store/index.js";
  import axios from "axios";
  import axiosClient from "../axiosClient.js";

  const keyword = ref('')
  const ingredients = ref([])

  const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
  })

  onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({data}) => {
          ingredients.value = data.meals;
        })
  })
</script>

