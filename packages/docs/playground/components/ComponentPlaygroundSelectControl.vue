<script setup lang="ts" generic="TItem extends AcceptableValue">
import FormSelect from '@components/components/select/FormSelect.vue'
import type {
  AcceptableValue,
  SelectItemOption,
} from '@components/types/selectItem.type'
import { computed } from 'vue'

interface Props<T> {
  items: T[]
  label: string
}

const props = defineProps<Props<TItem>>()

const model = defineModel<TItem | null>({
  required: true,
})

const selectItems = computed<SelectItemOption<TItem>[]>(() => {
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
