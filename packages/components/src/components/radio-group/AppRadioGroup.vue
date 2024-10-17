<script setup lang="ts">
import { RadioGroupRoot } from 'reka-ui'
import { ref } from 'vue'

import AppRadioGroupItem from '@/components/radio-group/AppRadioGroupItem.vue'
import AppRadioGroupItemLabel from '@/components/radio-group/AppRadioGroupItemLabel.vue'

const model = ref<string>('1')
</script>

<template>
  <RadioGroupRoot
    v-model="model"
  >
    <slot>
      <div class="flex items-center gap-x-2">
        <AppRadioGroupItem
          id="1"
          value="1"
        />
        <AppRadioGroupItemLabel for="1" />
      </div>

      <div class="flex items-center gap-x-2">
        <AppRadioGroupItem
          id="2"
          value="2"
        />
        <AppRadioGroupItemLabel for="2" />
      </div>
    </slot>
  </RadioGroupRoot>
</template>
