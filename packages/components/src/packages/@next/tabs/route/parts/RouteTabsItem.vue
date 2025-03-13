<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'
import { RouterLink } from 'vue-router'

import { mergeClasses } from '@/customClassVariants'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/packages/@next/tabs/shared/tabs.context'
import type { RouteTabsItemProps } from '@/packages/@next/tabs/shared/tabs.props'

const props = withDefaults(defineProps<RouteTabsItemProps>(), {
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
