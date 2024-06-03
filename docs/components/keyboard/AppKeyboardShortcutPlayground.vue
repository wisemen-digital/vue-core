<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppKeyboardShortcut,
  AppText,
} from '@wisemen/vue-core'

const controls = createControls({
  variant: {
    default: 'default',
    cols: 2,
    items: [
      'default',
      'bordered',
      'ghost',
      'secondary',
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
      <div class="flex gap-2">
        <AppText variant="subtext">
          As sequence:
        </AppText>
        <AppKeyboardShortcut
          v-bind="values"
          :keys="['k', 's']"
        />

        <AppText
          variant="subtext"
          class="px-3"
        >
          OR
        </AppText>
        <AppText variant="subtext">
          As combination:
        </AppText>
        <AppKeyboardShortcut
          v-bind="values"
          :keys="['ctrl', 's']"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
