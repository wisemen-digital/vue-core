<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { Accordion } from '@wisemen/vue-core'
import { AppAccordion } from '@wisemen/vue-core'

const controls = createControls({
  multiple: {
    default: false,
    label: 'Is multiple ?',
    type: 'switch',
  },
})

const items: Accordion[] = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus eu lacus sed luctus. ',
    value: '1',
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus eu lacus sed luctus. Mauris auctor ex nec nisl feugiat, vel laoreet metus efficitur. Ut vel venenatis ante.',
    value: '2',
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus eu lacus sed luctus. Mauris auctor ex nec nisl feugiat.',
    value: '3',
  },
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppAccordion
        :items="items"
        :type="values.multiple ? 'multiple' : 'single'"
        class="w-80"
        v-bind="values"
      />
    </template>
  </ComponentPlayground>
</template>
