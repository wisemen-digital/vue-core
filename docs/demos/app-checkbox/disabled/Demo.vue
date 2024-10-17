<script setup lang="ts">
import { AppCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div>
    <AppCheckbox
      v-model="model"
      :is-disabled="true"
      label="Checkbox"
      hint="This is a checkbox."
    />
  </div>
</template>
