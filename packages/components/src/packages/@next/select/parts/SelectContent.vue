<script setup lang="ts">
import type { ListboxContent } from 'reka-ui'
import {
  injectListboxRootContext,
  ListboxContent as RekaListboxContent,
} from 'reka-ui'
import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

import { mergeClasses } from '@/customClassVariants'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()

const listboxRootContext = injectListboxRootContext()
const listboxContentRef = ref<InstanceType<typeof ListboxContent> | null>(null)

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
  // Wait for children to be rendered
  setTimeout(() => {
    const options = getOptions()

    highlightSelectedOrFirstOption(options)
  }, 0)
})

onBeforeUnmount(() => {
  listboxRootContext.highlightedElement.value = null
})
</script>

<template>
  <RekaListboxContent
    ref="listboxContentRef"
    :class="style.content({
      class: mergeClasses(customClassConfig.content, classConfig?.content),
    })"
  >
    <slot />
  </RekaListboxContent>
</template>
