<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxRoot,
  ComboboxViewport,
} from 'radix-vue'
import { computed } from 'vue'

import type { CommandItem } from '../../types/commandItem.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppCommandItem from './AppCommandItem.vue'

const props = defineProps<{
  /**
   * The items to display in the combobox.
   */
  items: CommandItem[]
  /**
   * The placeholder of the combobox.
   */
  placeholder: string
}>()

const searchModel = defineModel<null | string>('search', {
  required: true,
})

const search = computed<string | undefined>({
  get: () => searchModel.value ?? undefined,
  set: (value) => {
    searchModel.value = value ?? null
  },
})
</script>

<template>
  <div>
    <ComboboxRoot
      v-model:search-term="search"
      :open="true"
      model-value=""
      class="rounded-lg bg-background shadow-popover-shadow"
    >
      <ComboboxAnchor>
        <ComboboxInput
          :auto-focus="true"
          :placeholder="placeholder"
          class="w-full truncate border-b border-solid border-border bg-transparent p-5 outline-none placeholder:text-input-placeholder"
        />
      </ComboboxAnchor>

      <ComboboxContent :force-mount="true">
        <ComboboxViewport>
          <ComboboxEmpty>
            Empty
          </ComboboxEmpty>

          <div class="p-2">
            <AppCommandItem
              v-for="item of props.items"
              :key="item.label"
              :item="item"
            />
          </div>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>
  </div>
</template>
