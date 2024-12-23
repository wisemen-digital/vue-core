<script setup lang="ts">
import {
  injectListboxRootContext,
  ListboxContent,
  ListboxItem,
} from 'reka-ui'
import {
  computed,
  onMounted,
  watch,
} from 'vue'

import type {
  AutocompleteProps,
} from '@/components/autocomplete/autocomplete.props'
import { useSelectStyle } from '@/components/select/select.style'

const props = defineProps<{
  displayFn: AutocompleteProps<any>['displayFn']
  options: AutocompleteProps<any>['items']
  styleConfig: AutocompleteProps<any>['styleConfig']
}>()

const listboxRootContext = injectListboxRootContext()

const selectStyle = useSelectStyle()

const optionClasses = computed<string>(() => selectStyle.option())
const dropdownContentClasses = computed<string>(() => selectStyle.dropdownContent())
const listboxContentClasses = computed<string>(() => selectStyle.listboxContent())

watch(() => props.options, () => {
  listboxRootContext.highlightFirstItem(new InputEvent(''))
}, {
  flush: 'post',
})

onMounted(() => {
  listboxRootContext.highlightFirstItem(new InputEvent(''))
})
</script>

<template>
  <div
    :class="dropdownContentClasses"
    :style="props.styleConfig"
    class="select-default"
  >
    <slot name="content-top" />

    <ListboxContent
      :class="listboxContentClasses"
      class="overflow-auto"
    >
      <ListboxItem
        v-for="item of options"
        :key="item.value"
        :value="item.value"
        :class="optionClasses"
      >
        {{ props.displayFn(item.value) }}
      </ListboxItem>
    </ListboxContent>

    <slot name="content-bottom" />
  </div>
</template>
