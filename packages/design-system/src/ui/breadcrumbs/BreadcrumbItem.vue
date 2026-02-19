<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { UIText } from '@/ui/text/index'
import { twMerge } from '@/utils/twMerge.util'

const props = defineProps<{
  icon?: Component
  label?: string
  to?: RouteLocationRaw
}>()
</script>

<template>
  <Component
    :is="props.to !== undefined ? ClickableElement : 'span'"
  >
    <Component
      :is="props.to !== undefined ? RouterLink : 'span'"
      :to="props.to"
      class="group"
    >
      <RowLayout gap="sm">
        <Component
          :is="props.icon"
          v-if="props.icon"
          :class="{
            'group-hover:text-primary': props.to !== undefined,
          }"
          class="size-4 text-quaternary"
        />
        <UIText
          v-if="props.label"
          :text="props.label"
          :class="twMerge(
            'text-xs text-quaternary',
            props.to !== undefined ? `
              group-hover:text-primary group-hover:underline
            ` : '',
          )"
        />
      </RowLayout>
    </Component>
  </Component>
</template>
