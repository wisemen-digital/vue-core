<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<string | null>(null)
</script>

<template>
  <div>
    <VcTextField
      v-model="model"
      label="Text"
      class="w-52"
    />
  </div>
</template>
