---
sidebar: auto
---


# AppText

<!-- @include: ./app-text-meta.md -->

## Types

::: code-group
```js [TextType]
type TextType = 'blockquote' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
```
:::

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
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/text/AppText.vue).