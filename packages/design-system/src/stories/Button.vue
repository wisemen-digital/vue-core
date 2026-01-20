<script lang="ts" setup>
import './button.css'

import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * background color of the button
     */
    backgroundColor?: string
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * size of the button
     */
    size?: 'large' | 'medium' | 'small'
  }>(),
  {
    primary: false,
  },
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  [`storybook-button--${props.size || 'medium'}`]: true,
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))

function onClick() {
  emit('click', 1)
}
</script>

<template>
  <button
    :class="classes"
    :style="style"
    type="button"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
