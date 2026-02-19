<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import Text from '@/ui/text/Text.vue'

const props = defineProps<{
  label: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <ClickableElement>
    <RouterLink
      :to="props.to"
      class="group flex items-center"
    >
      <Text
        :text="props.label"
        class="
          text-xs text-quaternary
          group-hover:text-fg-tertiary-hover group-hover:underline
        "
      />
    </RouterLink>
  </ClickableElement>
</template>
