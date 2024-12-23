<script setup lang="ts">
import {
  injectListboxRootContext,
  ListboxContent,
} from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  useTemplateRef,
} from 'vue'

import { useSelectStyle } from '@/components/select/select.style'
import SelectItem from '@/components/select-v2/blocks/SelectItem.vue'
import { injectSelectContext } from '@/components/select-v2/select.context'

const selectContext = injectSelectContext()
const selectStyle = useSelectStyle()
const listboxRootContext = injectListboxRootContext()
const listboxContentRef = useTemplateRef('listboxContentRef')

const listboxContentClasses = computed<string>(() => selectStyle.listboxContent())

function getOptions(): HTMLElement[] {
  const el = listboxContentRef.value?.$el as HTMLElement

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
  <div>
    <!-- TODO: slot top & bottom -->
    <ListboxContent
      ref="listboxContentRef"
    >
      <div
        v-if="!selectContext.isEmpty.value"
        :class="listboxContentClasses"
      >
        <SelectItem
          v-for="(item, itemIndex) of selectContext.items.value"
          :key="itemIndex"
          :item="item"
        />
      </div>
    </ListboxContent>
  </div>
</template>
