<script setup lang="ts" generic="T extends string">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from 'radix-vue'
import { computed } from 'vue'

import type { DataItem } from '@/types/dataItem.type'

const props = defineProps<{
  options: DataItem<T>[]
}>()

const model = defineModel<T | null>({
  required: true,
})

const computedModel = computed<T | undefined>({
  get: () => model.value ?? undefined,
  set: (value: T | undefined) => {
    model.value = value ?? null
  },
})
</script>

<template>
  <RadioGroupRoot v-model="computedModel">
    <div class="flex flex-col gap-y-3">
      <div
        v-for="option of props.options"
        :key="option.label"
        class="flex items-center gap-x-2"
      >
        <RadioGroupItem
          :id="option.value"
          :value="option.value"
          class="flex size-5 items-center justify-center gap-x-2 rounded-full border-[1.5px] border-solid border-input-border text-left outline-none ring-offset-2 ring-offset-background duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:border-primary"
        >
          <RadioGroupIndicator class="block size-2 rounded-full bg-primary" />
        </RadioGroupItem>

        <label
          :for="option.value"
          class="text-sm text-secondary-foreground"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
  </RadioGroupRoot>
</template>
