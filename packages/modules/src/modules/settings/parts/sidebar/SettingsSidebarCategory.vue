<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div>
    <span class="text-quaternary mb-lg inline-block text-xs font-bold uppercase">
      {{ props.label }}
    </span>

    <ul class="gap-y-sm flex flex-col">
      <slot />
    </ul>
  </div>
</template>
