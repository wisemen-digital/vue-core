<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import type { CreateButtonStyle } from '@/components/button/default-button/button.style'
import { createButtonStyle } from '@/components/button/default-button/button.style'
import { useProvideRouterLinkButtonContext } from '@/components/button/router-link-button/routerLinkButton.context'
import type { RouterLinkButtonProps } from '@/components/button/router-link-button/routerLinkButton.props'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<RouterLinkButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  size: 'md',
  variant: 'primary',
})

const buttonStyle = computed<CreateButtonStyle>(() => createButtonStyle({
  size: props.size,
  variant: props.variant,
}))

const customClassConfig = useComponentClassConfig('routerLinkButton', {
  size: props.size,
  variant: props.variant,
})

useProvideRouterLinkButtonContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: buttonStyle,
})
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <RouterLink
      :class="buttonStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      :data-loading="false"
      :to="props.to"
    >
      <slot />
    </RouterLink>
  </TestIdProvider>
</template>
