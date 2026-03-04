<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { UIText } from '@/ui/text/index'

const props = defineProps<{
  isLabelHidden?: boolean
  icon?: Component
  label: string
  to?: RouteLocationRaw
}>()
</script>

<template>
  <Component
    :is="props.to !== undefined ? ClickableElement : 'span'"
    class="min-w-0 overflow-hidden"
  >
    <Component
      :is="props.to !== undefined ? RouterLink : 'span'"
      :to="props.to"
      class="group min-w-0"
    >
      <RowLayout
        class="min-w-0"
        gap="sm"
      >
        <ActionTooltip
          :is-disabled="!props.isLabelHidden"
          :label="props.label"
        >
          <Component
            :is="props.icon"
            v-if="props.icon"
            :class="{
              'group-hover:text-primary': props.to !== undefined,
            }"
            class="size-4 shrink-0 text-quaternary"
          />
        </ActionTooltip>
        <UIText
          v-if="props.label"
          :text="props.label"
          :class="twMerge(
            'text-xs text-quaternary',
            props.isLabelHidden && 'sr-only',
            props.to !== undefined ? `
              group-hover:text-primary group-hover:underline
            ` : '',
          )"
        />
      </RowLayout>
    </Component>
  </Component>
</template>
