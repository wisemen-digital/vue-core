<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from 'radix-vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
import AppText from '@/components/text/AppText.vue'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  displayFn: (value: TValue) => string
  value: TValue
}>(), {
  isDisabled: false,
})
</script>

<template>
  <TagsInputItem
    :disabled="props.isDisabled"
    :value="(props.value as any)"
    :class="{
      'opacity-50': props.isDisabled,
    }"
    class="group flex items-center gap-x-1 overflow-hidden rounded-tag border border-solid border-border bg-muted-background px-2 py-0.5 aria-[current=true]:border-foreground aria-[current=true]:bg-foreground aria-[current=true]:text-background"
  >
    <TagsInputItemText :as-child="true">
      <AppText
        variant="subtext"
        class="truncate text-inherit"
      >
        {{ props.displayFn(props.value) }}
      </AppText>
    </TagsInputItemText>

    <TagsInputItemDelete :as-child="true">
      <AppIconButton
        :is-disabled="props.isDisabled"
        icon="close"
        size="xs"
        variant="ghost"
        label="Delete"
        class="!bg-transparent !duration-0 aria-[current=true]:text-background"
      />
    </TagsInputItemDelete>
  </TagsInputItem>
</template>
