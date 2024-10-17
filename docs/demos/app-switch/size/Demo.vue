<script setup lang="ts">
import { AppSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <AppSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      size="sm"
      hint="This is a small switch."
    />
    <AppSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      hint="This is a default switch."
    />
  </div>
</template>
