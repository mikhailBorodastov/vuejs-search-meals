<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-72 w-full object-cover">
    <div class="px-3">
      <h3 class="p-3 font-semibold">{{meal.strMeal}}</h3>
      <p class="px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit maiores repellat!</p>
      <div class="flex justify-between items-center gap-x-4 p-3">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border border-blue-600 transition-colors hover:bg-blue-600 hover:text-white">View Details</router-link>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";


  const { meal } = defineProps({
    meal: {
      required: true,
      type: Object
    }
  })

</script>

