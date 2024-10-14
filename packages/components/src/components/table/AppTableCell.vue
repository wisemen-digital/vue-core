<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * When true, the cell will have the primary text color to make it stand out
   * @default false
   */
  isPrimaryCell?: boolean
}>(), {
  isPrimaryCell: false,
})
</script>

<template>
  <div
    :class="[
      props.isPrimaryCell ? 'font-medium text-primary' : 'text-tertiary',
    ]"
    class="flex h-full items-center whitespace-nowrap px-3xl py-xl text-sm"
  >
    <slot />
  </div>
</template>
