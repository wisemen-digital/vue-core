<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'

const props = defineProps<{
  icon: Component
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
      <Component
        :is="props.icon"
        :class="{
          'group-hover:text-primary': props.to !== undefined,
        }"
        class="size-4 text-quaternary"
      />
    </Component>
  </Component>
</template>
