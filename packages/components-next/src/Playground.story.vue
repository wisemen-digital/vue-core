<script setup lang="ts">
import {
  ListboxContent,
  ListboxFilter,
  ListboxItem,
  ListboxRoot,
} from 'reka-ui'

import Popover from '@/components/popover/Popover.vue'
import { defineComponentVariant } from '@/customClassVariants'

defineComponentVariant({
  config: {},
  target: {
    prop: 'size',
    value: 'super-large',
  },
  component: 'button',
})
</script>

<template>
  <Story title="Playground">
    <ListboxRoot>
      <Popover>
        <template #trigger>
          <button class="rounded bg-blue-500 p-2 text-white">
            Open Listbox
          </button>
        </template>

        <template #content>
          <ListboxFilter />

          <ListboxContent>
            <ListboxItem value="1">
              One
            </ListboxItem>
            <ListboxItem value="2">
              Two
            </ListboxItem>
          </ListboxContent>
        </template>
      </Popover>
    </ListboxRoot>
  </Story>
</template>
