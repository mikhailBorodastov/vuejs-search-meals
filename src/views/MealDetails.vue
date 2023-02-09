<template>
  <div class="max-w-[800px] mx-auto flex flex-col gap-y-6 py-10 h-fit">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w">
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Category</strong>: {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area</strong>: {{ meal.strArea }}</div>
    </div>
    <div><strong class="font-bold">Tags</strong>: {{ meal.strTags }} </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-2 md:grd-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[ `strIngredient${index + 1}` ]">
              {{index + 1}}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[ `strMeasure${index + 1}` ] && meal[ `strMeasure${index + 1}` ] !== ' '">
              {{index + 1}}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex gap-x-10">
      <YouTubeButton :href="meal.strYoutube">
        Go To Youtube
      </YouTubeButton>
      <a :href="meal.strSource" target="_blank" class="px-3 py-2 rounded border border-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
        Source
      </a>
    </div>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import axiosClient from "../axiosClient.js";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({data}) => {
        meal.value = data.meals[0] || {}
      })
})

</script>

