<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <VcSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      size="sm"
      hint="This is a small switch."
    />
    <VcSwitch
      v-model="model"
      :is-required="true"
      label="Switch"
      hint="This is a default switch."
    />
  </div>
</template>
