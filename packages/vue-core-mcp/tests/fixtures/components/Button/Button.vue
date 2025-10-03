<template>
  <button class="vc-test-button" @click="handleClick">
    <slot name="icon" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
/**
 * Example button for MCP fixtures
 */
defineOptions({
  name: 'VcTestButton',
})

const props = withDefaults(defineProps({
  label: {
    type: String,
    required: true,
    default: 'Click me',
    description: 'Visible label for the button',
  },
  tone: {
    type: String,
    default: 'primary',
    description: 'Visual tone (primary, secondary)',
  },
}), {
  tone: 'primary',
})

const emit = defineEmits<{
  /**
   * Fires when the button is pressed
   * @param event Mouse event payload
   */
  (event: 'click', payload: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<style scoped>
.vc-test-button {
  background: var(--vc-test-button-bg, #000);
  color: white;
  border-radius: 0.5rem;
}
</style>
