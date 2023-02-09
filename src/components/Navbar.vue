<template>
  <header class="flex justify-between items-center  bg-white shadow h-24">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 transition-colors hover:text-emerald-300">
      Home
    </router-link>
    <div class="flex items-center">
      <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:text-emerald-300">
        Search Meals
      </router-link>
      <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:text-emerald-300">
        Meals By Letter
      </router-link>
      <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:text-emerald-300">
        Meals By Ingredient
      </router-link>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>