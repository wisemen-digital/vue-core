<script setup lang="ts" generic="TItem extends AcceptableValue">
import FormSelect from '@components/components/select/FormSelect.vue'
import type { Icon } from '@components/icons/icons'
import { icons } from '@components/icons/icons'
import type {
  AcceptableValue,
  SelectItemOption,
} from '@components/types/selectItem.type'
import { computed } from 'vue'

interface Props {
  label: string
}

const props = defineProps<Props>()

const model = defineModel<Icon | null>({
  required: true,
})

const selectItems = computed<SelectItemOption<Icon>[]>(() => {
  return Object.keys(icons).map(item => ({
    type: 'option',
    value: item as Icon,
  }))
})

function displayFunction(item: Icon) {
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
