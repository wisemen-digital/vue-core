<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div>
    <VcSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      hint="This is a switch."
    />
  </div>
</template>
