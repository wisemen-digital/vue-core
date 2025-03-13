<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'
import { RouterLink } from 'vue-router'

import PrimitiveElement from '@/components/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/components/@next/tabs/tabs.context'
import type { RouteTabItemProps } from '@/components/@next/tabs/tabs.props'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<RouteTabItemProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
})

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <RekaTabsTrigger
      :as-child="true"
      :value="(props.to.name as string)"
      :class="style.item({
        class: mergeClasses(customClassConfig.item, classConfig?.item),
      })"
    >
      <RouterLink :to="props.to">
        <slot />
      </RouterLink>
    </RekaTabsTrigger>
  </PrimitiveElement>
</template>
