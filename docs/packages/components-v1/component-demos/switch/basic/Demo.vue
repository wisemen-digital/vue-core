<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(false)
const model2 = ref<boolean>(false)
</script>

<template>
  <div>
    <VcSwitch
      v-model="model"
      label="I want to receive marketing emails"
      hint="You can unsubscribe at any time."
    />
    <div class="border-primary my-3 w-72 border-t" />
    <VcSwitch
      v-model="model2"
      label="You can also use a smaller switch"
      size="sm"
    />
  </div>
</template>
