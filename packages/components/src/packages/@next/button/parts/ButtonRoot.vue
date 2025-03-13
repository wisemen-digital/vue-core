<script setup lang="ts">
import { computed } from 'vue'

import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import {
  type ClassConfig,
  getComponentClassConfig,
  mergeClasses,
} from '@/customClassVariants'
import { useProvideButtonContext } from '@/packages/@next/button/button.context'
import type { ButtonEmits, ButtonProps } from '@/packages/@next/button/button.props'
import {
  type CreateButtonStyle,
  createButtonStyle,
} from '@/packages/@next/button/style/button.style'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<ButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  size: 'md',
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<ButtonEmits>()

const themeContext = injectThemeProviderContext()

const buttonStyle = computed<CreateButtonStyle>(() => createButtonStyle({
  isLoading: props.isLoading,
  size: props.size,
  variant: props.variant,
}))

const customClassConfig = computed<ClassConfig<'button'>>(
  () => getComponentClassConfig('button', themeContext.theme.value, {
    isLoading: props.isLoading,
    size: props.size,
    variant: props.variant,
  }),
)

function onClick(event: MouseEvent): void {
  if (props.isLoading) {
    return
  }

  emit('click', event)
}

useProvideButtonContext({
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
      :is-disabled="props.isDisabled"
      :aria-disabled="props.isLoading"
      :aria-busy="props.isLoading"
      :type="props.type"
      :data-is-loading="props.isLoading"
      :data-is-not-loading="!props.isLoading"
      :class="buttonStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      as="button"
      @click="onClick"
    >
      <slot />
    </InteractableElement>
  </PrimitiveElement>
</template>
