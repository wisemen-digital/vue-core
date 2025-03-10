<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="border border-solid border-primary rounded-xl p-xl">
    <h2 class="text-lg font-semibold mb-xl text-primary">
      {{ props.title }}
    </h2>

    <div class="flex justify-center items-center py-xl">
      <slot />
    </div>
  </div>
</template>
