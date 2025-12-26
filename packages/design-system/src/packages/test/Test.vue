<script setup lang="ts">
const props = defineProps<{
  isActive?: boolean
  label: string
}>()
</script>

<template>
  <div class="bg-error-400 p-xl">
    <span v-if="props.isActive">{{ props.label }}</span>
  </div>
</template>
