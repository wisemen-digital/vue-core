<script setup lang="ts" generic="TItem extends AcceptableValue">
import { icons } from '@docs/icons/icons'
import {
  type AcceptableValue,
  FormSelect,
  type Icon,
  type SelectItem,
} from '@wisemen/vue-core'
import { computed } from 'vue'

interface Props {
  label: string
}

const props = defineProps<Props>()

const model = defineModel<Icon | null>({
  required: true,
})

const selectItems = computed<SelectItem<Icon>[]>(() => {
  return Object.keys(icons).map((item) => ({
    type: 'option',
    value: item as Icon,
  }))
})

function displayFunction(item: Icon): string {
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
