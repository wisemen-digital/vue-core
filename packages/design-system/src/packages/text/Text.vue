<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <span>
    {{ props.text }}
  </span>
</template>
