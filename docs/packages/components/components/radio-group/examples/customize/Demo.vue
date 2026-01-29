<script setup lang="ts">
import {
  VcRadioGroup,
  VcRadioGroupItemControl,
  VcRadioGroupItemRoot,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('public')

const options = [
  {
    label: 'Public',
    description: 'Anyone can see this',
    value: 'public',
  },
  {
    label: 'Private',
    description: 'Only you can see this',
    value: 'private',
  },
  {
    label: 'Team',
    description: 'Only people in your team can see this',
    value: 'team',
  },
]
</script>

<template>
  <VcRadioGroup v-model="value">
    <div class="flex w-96 flex-col">
      <VcRadioGroupItemRoot
        v-for="option of options"
        :key="option.value"
        :value="option.value"
        class="
          gap-xl py-lg border-secondary flex border-b border-solid
          first:pt-0
          last:border-b-0 last:pb-0
        "
      >
        <div class="flex h-lh items-center">
          <VcRadioGroupItemControl />
        </div>

        <div class="flex flex-col items-start">
          <p
            class="
              text-secondary block text-left text-sm font-medium duration-200
              group-data-[state=checked]/radio-group-item:text-brand-400
            "
          >
            {{ option.label }}
          </p>

          <p
            class="
              text-tertiary block text-left text-xs duration-200
              group-data-[state=checked]/radio-group-item:text-brand-primary
            "
          >
            {{ option.description }}
          </p>
        </div>
      </VcRadioGroupItemRoot>
    </div>
  </VcRadioGroup>
</template>
