<script setup lang="ts">
import AppIconButton from '@/components/button/AppIconButton.vue';
import AppIcon from '@/components/icon/AppIcon.vue';
import AppToggle from '@/components/toggle/AppToggle.vue';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue';

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
      <AppToggle v-bind="values" v-model:is-toggled="model">
        <template #default="toggle">
          <AppIconButton label="toggle-view" :icon="toggle.isToggled ? 'eye' : 'eyeSlash'"/>
        </template>
      </AppToggle>
    </template>
  </ComponentPlayground>
</template>
