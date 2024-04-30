---
sidebar: auto
---


# AppText
<script setup>
// IMPORT COMPONENT PLAYGROUND
</script>

// RENDER COMPONENT PLAYGROUND


## Props

| Prop    | Type                                                                                                         | Description                                          | Default     |
| ------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------- |
| as      | `'blockquote'` \| `'div'` \| `'h1'` \| `'h2'` \| `'h3'` \| `'h4'` \| `'h5'` \| `'h6'` \| `'p'` \| `'span'`   | The HTML tag to render the component as              | `'p'`       |
| variant | `'hero'` \| `'title'` \| `'subtitle'` \| `'heading'` \| `'body'` \| `'subtext'` \| `'caption'`               | The variant of the text                              |             |


## Slots

| Slot      | Type | Description               |
| --------- | ---- | ------------------------- |
| `default` | None | The content of the text   |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'
</script>
  
<template>
  <AppText is="h2" variant='title'>
    Some text
  </AppText>
</template>

```

```vue [Source code]
<script setup lang="ts">
import { computed, useAttrs } from 'vue'

import type { TextProps } from '@/components/text/text.style'
import { textVariants } from '@/components/text/text.style'

type TextType = 'blockquote' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

const props = withDefaults(
  defineProps<{
    /**
     * The HTML tag to render the component as
     * @default 'p'
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
  const classes: string[] = [
    'text-foreground',
  ]

  switch (props.variant) {
    case 'hero':
      classes.push('text-hero font-bold')

      break

    case 'title':
      classes.push('text-title font-semibold')

      break

    case 'subtitle':
      classes.push('text-subtitle')

      break

    case 'heading':
      classes.push('text-heading')

      break

    case 'body':
      classes.push('text-body')

      break

    case 'subtext':
      classes.push('text-subtext')

      break

    case 'caption':
      classes.push('text-caption')

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

```

:::