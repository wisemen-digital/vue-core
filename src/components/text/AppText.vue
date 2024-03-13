<script setup lang="ts">
import { computed, useAttrs } from 'vue'

import type { TextProps } from './text.style'
import { textVariants } from './text.style'

type TextType = 'blockquote' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

const props = withDefaults(
  defineProps<{
    /**
     * The HTML tag to render the component as
     */
    as?: TextType
    /**
     * The variant of the text
     */
    variant: TextProps['variant']
  }>(),
  {
    as: 'p',
  },
)

const classes = computed<string>(() => {
  const classes: string[] = []

  switch (props.variant) {
    case 'hero':
      classes.push('text-hero font-bold')
      break

    case 'title':
      classes.push('text-title font-semibold text-foreground')
      break

    case 'subtitle':
      classes.push('text-subtitle text-foreground')
      break

    case 'heading':
      classes.push('text-heading text-foreground')
      break

    case 'body':
      classes.push('text-body text-foreground')
      break

    case 'subtext':
      classes.push('text-subtext text-foreground')
      break

    case 'caption':
      classes.push('text-caption text-foreground')
      break
  }

  return classes.join(' ')
})
const attrs = useAttrs()
</script>

<template>
  <Component
    :is="as"
    :class="
      textVariants({
        variant: props.variant,
        class: [classes, attrs.class],
      })
    "
  >
    <slot />
  </Component>
</template>
