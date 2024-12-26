<script setup lang="ts">
import { VcRadioGroup, VcRadioGroupItem } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<string>('Apple')

const items = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    value: 'Banana',
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
  },
]
</script>

<template>
  <VcRadioGroup
    v-model="selectedItem"
    :items="items"
    label="Radio Group"
    hint="This is a radio group."
  >
   <div class="flex flex-col gap-y-2">
      <VcRadioGroupItem
        v-for="item of items" 
        :key="item.label"
        :value="item.value" 
        :label="item.label" 
      />
   </div>
  </VcRadioGroup>
</template>
