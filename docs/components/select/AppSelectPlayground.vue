<script setup lang="ts">
import '@wisemen/vue-core/style.css'

import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
const items: SelectItem<string>[] = [
  {
    type: 'option',
    value: 'Apple',
  },
  {
    type: 'option',
    value: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
  },
  {
    isDisabled: true,
    type: 'option',
    value: 'Grapes',
  },
  {
    isDisabled: true,
    type: 'option',
    value: 'Pineapple',
  },
]
</script>

<template>
  <div class="vp-raw">
    <AppSelect
      v-model="value"
      :items="items"
      :display-fn="(value) => value"
    />
  </div>
</template>
