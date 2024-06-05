<script setup lang="ts" generic="TItem extends AcceptableValue">
import type {
  AcceptableValue,
  SelectItem,
} from '@wisemen/vue-core'
import { FormSelect } from '@wisemen/vue-core'
import { computed } from 'vue'

interface Props<T> {
  items: T[]
  label: string
}

const props = defineProps<Props<TItem>>()

const model = defineModel<TItem | null>({
  required: true,
})

const selectItems = computed<SelectItem<TItem>[]>(() => {
  return props.items.map((item) => ({
    type: 'option',
    value: item,
  }))
})

function displayFunction(item: TItem): string {
  return item as string
}
</script>

<template>
  <div>
    <FormSelect
      v-model="model"
      :items="selectItems"
      :is-touched="false"
      :display-fn="displayFunction"
      :label="props.label"
      :errors="{ _errors: [] }"
    />
  </div>
</template>
