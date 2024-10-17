<script setup lang="ts">
import { AppSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div>
    <AppSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      hint="This is a switch."
    />
  </div>
</template>
