<script setup lang="ts">
import { VcCheckbox, VcThemeProvider } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <VcCheckbox
    v-model="model"
    :is-required="true"
    label="Checkbox"
    hint="This is a checkbox."
  />
</template>
