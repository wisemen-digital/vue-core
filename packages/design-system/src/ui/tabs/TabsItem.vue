<script setup lang="ts">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'

import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import { UINumberBadge } from '@/ui/number-badge/index'
import { useInjectTabsContext } from '@/ui/tabs/tabs.context'
import type { TabsItemProps } from '@/ui/tabs/tabs.props'
import { UIText } from '@/ui/text/index'

const props = withDefaults(defineProps<TabsItemProps>(), {
  isDisabled: false,
  count: null,
  icon: undefined,
  label: null,
})

const {
  variants,
} = useInjectTabsContext()
</script>

<template>
  <ClickableElement>
    <RekaTabsTrigger
      :value="props.value"
      :disabled="props.isDisabled"
      :class="variants.item()"
    >
      <component
        :is="props.icon"
        v-if="props.icon != null"
        class="size-4 shrink-0"
      />
      <UIText
        v-if="props.label != null"
        :text="props.label"
        class="text-xs"
      >
        {{ props.label }}
      </UIText>
      <slot v-else />
      <UINumberBadge
        v-if="props.count != null"
        :value="props.count"
        size="sm"
      />
    </RekaTabsTrigger>
  </ClickableElement>
</template>
