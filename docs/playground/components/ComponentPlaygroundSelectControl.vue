<script setup lang="ts" generic="TItem extends AcceptableValue">
import type { AcceptableValue } from '@wisemen/vue-core'

// import type {
//   AcceptableValue,
//   SelectItem,
// } from '@wisemen/vue-core'
// import { FormSelect } from '@wisemen/vue-core'

interface Props<T> {
  items: T[]
  label: string
}

const props = defineProps<Props<TItem>>()

const model = defineModel<TItem | null>({
  required: true,
})

// const selectItems = computed<SelectItem<TItem>[]>(() => {
//   return props.items.map((item) => ({
//     type: 'option',
//     value: item,
//   }))
// })

// function displayFunction(item: TItem): string {
//   return item as string
// }
</script>

<template>
  <div>
    <!-- <FormSelect
      v-model="model"
      :items="selectItems"
      :is-touched="false"
      :display-fn="displayFunction"
      :label="props.label"
      :errors="{ _errors: [] }"
    /> -->
    <select v-model="model">
      <option
        v-for="item of props.items"
        :key="item.toString()"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>
