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
  >
   <div class="grid grid-cols-3">
      <VcRadioGroupItem 
        v-for="item of items" 
        :key="item.label"
        :value="item.value" 
      >
        <div class="group-data-[state=checked]:bg-brand-primary-500 duration-200">
          {{ item.label }}
        </div>
      </VcRadioGroupItem>
   </div>

  </VcRadioGroup>
</template>
