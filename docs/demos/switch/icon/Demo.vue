<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div>
    <VcSwitch
      v-model="model"
      size="default"
      label="Switch"
      hint="This is a switch."
      icon-unchecked="close"
      icon-checked="check"
    />
  </div>
</template>
