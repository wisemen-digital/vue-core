<script setup lang="ts">
import { VcCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div>
    <VcCheckbox
      v-model="model"
      :is-disabled="true"
      label="Checkbox"
      hint="This is a checkbox."
    />
  </div>
</template>
