<script setup lang="ts">
import type { VcButtonProps } from '@wisemen/vue-core'
import {
  VcIconButton,
  VcToggle,
} from '@wisemen/vue-core'
import { computed, ref } from 'vue'

const isOn = ref<boolean>(false)

const label = computed<string>(() => isOn.value ? 'Disable translations' : 'Enable translations')
const variant = computed<VcButtonProps['variant']>(() => isOn.value ? 'default' : 'secondary')
</script>

<template>
  <VcToggle v-model="isOn">
    <VcIconButton
      :label="label"
      :variant="variant"
      icon="translate"
    />
  </VcToggle>
</template>
