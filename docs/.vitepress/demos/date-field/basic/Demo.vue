<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core'
import { ref } from 'vue';

const model = ref<Date | null>(null)
</script>

<template>
  <div>
    <VcDateField 
      v-model="model" 
      label="Date"
      class="w-52"
    />
  </div>
</template>