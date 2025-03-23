<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import {
  type CreateButtonStyle,
  createButtonStyle,
} from '@/packages/@next/button/default-button/button.style'
import { useProvideRouterLinkButtonContext } from '@/packages/@next/button/router-link-button/routerLinkButton.context'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link-button/routerLinkButton.props'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<RouterLinkButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  size: 'md',
  type: 'button',
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
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement
      :is-disabled="false"
      :data-is-loading="false"
      :type="props.type"
      :class="buttonStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
    >
      <RouterLink :to="props.to">
        <slot />
      </RouterLink>
    </InteractableElement>
  </PrimitiveElement>
</template>
