<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div>
    <span
      class="
        text-quaternary bg-secondary-subtle pb-xxs sticky top-0 z-20
        inline-block w-full text-xs font-bold uppercase
      "
    >
      {{ props.label }}
    </span>

    <ul class="gap-y-sm mt-md flex flex-col">
      <slot />
    </ul>
  </div>
</template>
