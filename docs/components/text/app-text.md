---
sidebar: auto
---


# AppText
<script setup>
import AppTextPlayground from './AppTextPlayground.vue'
</script>

<AppTextPlayground />


## Props

| Prop    | Type                                                                                                         | Description                                          | Default     |
| ------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------- |
| as      | `'blockquote'` \| `'div'` \| `'h1'` \| `'h2'` \| `'h3'` \| `'h4'` \| `'h5'` \| `'h6'` \| `'p'` \| `'span'`   | The HTML tag to render the component as              | `'p'`       |
| variant*| `'hero'` \| `'title'` \| `'subtitle'` \| `'heading'` \| `'body'` \| `'subtext'` \| `'caption'`               | The variant of the text                              |             |


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
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/text/AppText.vue).