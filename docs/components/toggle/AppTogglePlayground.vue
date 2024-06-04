<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppIconButton, AppToggle } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  isDisabled: {
    default: false,
    cols: 2,
    label: 'Is Disabled',
    type: 'switch',
  },
})

const model = ref<boolean>(true)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppToggle
        v-bind="values"
        v-model:is-toggled="model"
      >
        <template #default="toggle">
          <AppIconButton
            :icon="toggle.isToggled ? 'eye' : 'eyeSlash'"
            label="toggle-view"
          />
        </template>
      </AppToggle>
    </template>
  </ComponentPlayground>
</template>
