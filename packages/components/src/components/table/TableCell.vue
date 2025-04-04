<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * When true, the cell will have the primary text color to make it stand out
   * @default false
   */
  isPrimaryCell?: boolean
}>(), { isPrimaryCell: false })

defineSlots<{
  /**
   * Use this to render the table cell data.
   */
  default: () => void
}>()
</script>

<template>
  <div
    :class="[
      props.isPrimaryCell ? 'text-primary font-medium' : 'text-tertiary',
    ]"
    class="px-3xl py-xl flex h-full items-center text-sm whitespace-nowrap"
  >
    <slot />
  </div>
</template>
