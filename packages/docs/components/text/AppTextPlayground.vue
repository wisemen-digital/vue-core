<script setup lang="ts">
import AppText from '@/components/text/AppText.vue';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  slot: {
    default: 'Some text',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
  as: {
    default: 'p',
    cols: 2,
    items: [
      'blockquote',
      'div',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'span',
    ],
    label: 'As',
    type: 'select',
  },
  variant: {
    default: 'body',
    cols: 2,
    items: [
      'hero',
      'title',
      'subtitle',
      'heading',
      'body',
      'subtext',
      'caption',
    ],
    label: 'Variant',
    type: 'select',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppText v-bind="values">
        {{ values.slot }}
      </AppText>
    </template>
  </ComponentPlayground>
</template>
