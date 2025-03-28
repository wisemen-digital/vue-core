<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(false)
</script>

<template>
  <div>
    <VcSwitch
      v-model="model"
      :errors="['You must accept the terms and conditions.']"
      :is-required="true"
      :is-touched="true"
      :style-config="{
        '--switch-bg-color-checked': '#fbc2eb',
        '--switch-bg-color-default': '#a18cd1',
        '--switch-bg-color-hover': '#a18cd1',
        '--switch-bg-color-focus': '#a18cd1',
        '--switch-border-color-checked': 'transparent',
        '--switch-border-color-default': 'transparent',
        '--switch-border-color-hover': 'transparent',
        '--switch-border-color-focus': 'transparent',
        '--switch-error-font-size': '0.2rem',
      }"
      label="Accept terms and conditions"
    />
  </div>
</template>
