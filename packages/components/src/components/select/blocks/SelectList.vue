<script setup lang="ts">
import {
  injectListboxRootContext,
  ListboxContent,
  ListboxVirtualizer,
} from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  useTemplateRef,
} from 'vue'

import SelectItem from '@/components/select/blocks/SelectItem.vue'
import { injectSelectContext } from '@/components/select/select.context'
import { useSelectStyle } from '@/components/select/select.style'

const selectContext = injectSelectContext()
const selectStyle = useSelectStyle()
const listboxRootContext = injectListboxRootContext()
const listboxContentRef = useTemplateRef('listboxContentRef')

const listboxContentClasses = computed<string>(() => selectStyle.listboxContent())

function getOptions(): HTMLElement[] {
  const el = listboxContentRef.value?.$el ?? null as HTMLElement | null

  if (el === null) {
    return []
  }

  return Array.from(el.querySelectorAll('[role=option]')) as HTMLElement[]
}

function highlightSelectedOrFirstOption(
  options: HTMLElement[],
): void {
  if (options.length === 0) {
    return
  }

  const selectedOptionIndex = options.findIndex(
    (option) => option.getAttribute('aria-selected') === 'true',
  )

  const optionToSelect = selectedOptionIndex === -1
    ? options[0]
    : options[selectedOptionIndex]

  setTimeout(() => {
    listboxRootContext.changeHighlight(optionToSelect as HTMLElement)
  })
}

onMounted(() => {
  const options = getOptions()

  if (options.length === 0) {
    return
  }

  highlightSelectedOrFirstOption(options)
})

onBeforeUnmount(() => {
  listboxRootContext.highlightedElement.value = null
})
</script>

<template>
  <ListboxContent
    v-if="!selectContext.isEmpty.value"
    ref="listboxContentRef"
    :class="listboxContentClasses"
  >
    <ListboxVirtualizer
      v-if="selectContext.virtualList.value !== null"
      :options="selectContext.filteredItems.value"
      :overscan="10"
      :estimate-size="selectContext.virtualList.value.optionHeight"
    >
      <template #default="{ option }">
        <SelectItem :item="option">
          <template #option="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="selectItem"
              name="option"
            />
          </template>

          <template #option-content="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="selectItem"
              name="option-content"
            />
          </template>

          <template #option-indicator="{ item: selectItem }">
            <slot
              v-if="selectItem.type === 'option'"
              :item="selectItem"
              name="option-indicator"
            />
          </template>
        </SelectItem>
      </template>
    </ListboxVirtualizer>

    <template v-else>
      <SelectItem
        v-for="(item, itemIndex) of selectContext.items.value"
        :key="itemIndex"
        :item="item"
      >
        <template #option="{ item: selectItem }">
          <slot
            v-if="selectItem.type === 'option'"
            :item="selectItem"
            name="option"
          />
        </template>

        <template #option-content="{ item: selectItem }">
          <slot
            v-if="selectItem.type === 'option'"
            :item="selectItem"
            name="option-content"
          />
        </template>

        <template #option-indicator="{ item: selectItem }">
          <slot
            v-if="selectItem.type === 'option'"
            :item="selectItem"
            name="option-indicator"
          />
        </template>

        <template #group-label="{ label }">
          <slot
            :label="label"
            name="group-label"
          />
        </template>

        <template #separator>
          <slot name="separator" />
        </template>
      </SelectItem>
    </template>
  </ListboxContent>
</template>
