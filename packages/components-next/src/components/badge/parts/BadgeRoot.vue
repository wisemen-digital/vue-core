<script setup lang="ts">
import { computed } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import {
  getCustomComponentVariant,
  mergeClasses,
} from '@/class-variant/customClassVariants'
import { useProvideBadgeContext } from '@/components/badge/badge.context'
import type { BadgeEmits } from '@/components/badge/badge.emits'
import type { BadgeProps } from '@/components/badge/badge.props'
import type { CreateBadgeStyle } from '@/components/badge/badge.style'
import { createBadgeStyle } from '@/components/badge/badge.style'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<BadgeProps>(), {
  testId: null,
  isRemovable: false,
  classConfig: null,
  icon: null,
  size: 'md',
})

const emit = defineEmits<BadgeEmits>()

const { theme } = injectThemeProviderContext()

const badgeStyle = computed<CreateBadgeStyle>(() => createBadgeStyle({
  size: props.size,
  variant: props.variant ?? undefined,
}))

const customClassConfig = computed<ResolvedClassConfig<'badge'>>(
  () => getCustomComponentVariant('badge', theme.value, {
    size: props.size,
    variant: props.variant,
  }),
)

function onRemove(): void {
  emit('remove')
}

useProvideBadgeContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: badgeStyle,
  onRemove,
})
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <div
      :class="badgeStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      :data-icon="props.icon !== null || undefined"
      :data-removable="props.isRemovable || undefined"
    >
      <slot />
    </div>
  </TestIdProvider>
</template>
