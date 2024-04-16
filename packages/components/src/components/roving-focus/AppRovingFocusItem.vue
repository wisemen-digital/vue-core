<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import { Primitive, useId } from 'radix-vue'
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
} from 'vue'

import { useCollection } from './collection.composable'
import { injectRovingFocusGroupContext } from './rovingFocus.context'
import {
  focusFirst,
  getFocusIntent,
  wrapArray,
} from './rovingFocus.util'

export interface RovingFocusItemProps extends PrimitiveProps {
  active?: boolean
  focusable?: boolean
  tabStopId?: string
}

const props = withDefaults(defineProps<RovingFocusItemProps>(), {
  active: true,
  as: 'span',
  focusable: true,
})

const context = injectRovingFocusGroupContext()
const id = computed<string>(() => props.tabStopId ?? useId())
const isCurrentTabStop = computed<boolean>(
  () => {
    return context.currentTabStopId.value === id.value
  },
)

const { injectCollection } = useCollection('rovingFocus')
const collections = injectCollection()

onMounted(() => {
  if (props.focusable) {
    context.onFocusableItemAdd()
  }
})
onUnmounted(() => {
  if (props.focusable) {
    context.onFocusableItemRemove()
  }
})

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Tab' && event.shiftKey) {
    context.onItemShiftTab()
    return
  }

  if (event.target !== event.currentTarget) {
    return
  }

  const focusIntent = getFocusIntent(
    event,
    context.orientation.value,
    context.dir.value,
  )

  if (focusIntent !== undefined) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
      return
    }

    event.preventDefault()

    let candidateNodes = [
      ...collections.value,
    ]

    if (focusIntent === 'last') {
      candidateNodes.reverse()
    }
    else if (focusIntent === 'prev' || focusIntent === 'next') {
      if (focusIntent === 'prev') {
        candidateNodes.reverse()
      }
      const currentIndex = candidateNodes.indexOf(
        event.currentTarget as HTMLElement,
      )

      candidateNodes = context.loop.value
        ? wrapArray(candidateNodes, currentIndex + 1)
        : candidateNodes.slice(currentIndex + 1)
    }

    void nextTick(() => focusFirst(candidateNodes))
  }
}
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :tabindex="isCurrentTabStop ? 0 : -1"
    :data-orientation="context.orientation.value"
    :data-active="active"
    :data-disabled="!focusable || undefined"
    data-radix-vue-collection-item
    @mousedown="
      (event) => {
        // We prevent focusing non-focusable items on `mousedown`.
        // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
        if (!focusable) event.preventDefault();
        // Safari doesn't focus a button when clicked so we run our logic on mousedown also
        else context.onItemFocus(id);
      }
    "
    @focus="context.onItemFocus(id)"
    @keydown="handleKeydown"
  >
    <slot />
  </Primitive>
</template>
