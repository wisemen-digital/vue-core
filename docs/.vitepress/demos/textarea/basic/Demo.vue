<script setup lang="ts">
import { VcTextarea } from '@wisemen/vue-core'
import { ref } from 'vue';

const model = ref<string | null>(null)
</script>

<template>
  <div>
    <VcTextarea 
      v-model="model" 
      :is-required="true"
      resize="vertical"
      label="Textarea"
      class="w-72"
    />
  </div>
</template>