<script setup lang="ts">
import {
  ref,
  useAttrs,
} from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The HTML element or component to render as the text container.
   * @default 'span'
   */
  as?: string
  class?: string | null
  /**
   * If `true`, the tooltip will be disabled even if the text is truncated.
   * @default false
   */
  disableTooltip?: boolean
  /**
   * The text content to display.
   */
  text: string
  /**
   * If `true`, the text will be truncated with an ellipsis if it overflows its container.
   * If a number between 1 and 6 is provided, the text will be clamped to that number of lines.
   */
  truncate?: boolean | 2 | 3 | 4 | 5 | 6
}>(), {
  as: 'span',
  class: null,
  disableTooltip: false,
  truncate: true,
})

const attrs = useAttrs()

const textRef = ref<HTMLElement | null>(null)
</script>

<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <Component
    v-bind="attrs"
    :is="props.as"
    ref="textRef"
    :class="[
      props.class, {
        'truncate': props.truncate === true,
        'line-clamp-2': props.truncate === 2,
        'line-clamp-3': props.truncate === 3,
        'line-clamp-4': props.truncate === 4,
        'line-clamp-5': props.truncate === 5,
        'line-clamp-6': props.truncate === 6,
      },
    ]"
    class="max-w-full"
  >
    {{ props.text }}
  </Component>
</template>
