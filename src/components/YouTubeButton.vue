<template>
  <a :href="href" target="_blank" class="px-3 py-2 rounded border border-red-600 transition-colors hover:bg-red-600 hover:text-white">
    <slot>

    </slot>
  </a>

</template>

<script setup>
 const props = defineProps({
   href: String
 })
</script>

<style scoped>

</style>