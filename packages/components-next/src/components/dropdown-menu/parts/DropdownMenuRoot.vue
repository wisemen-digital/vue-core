<script setup lang="ts">
import { DropdownMenuRoot as RekaDropdownMenuRoot } from 'reka-ui'
import { computed } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import { getCustomComponentVariant } from '@/class-variant/customClassVariants'
import { useProvideDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import type { DropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props'
import type { CreateDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import { createDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isPopoverArrowHidden: false,
  classConfig: null,
  popoverAlign: 'center',
  popoverAlignOffset: 0,
  popoverAnchorReferenceElement: null,
  popoverCollisionPadding: 10,
  popoverContainerElement: null,
  popoverSide: 'bottom',
  popoverSideOffset: 10,
  popoverWidth: null,
  variant: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const { theme } = injectThemeProviderContext()

const dropdownMenuStyle = computed<CreateDropdownMenuStyle>(
  () => createDropdownMenuStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = computed<ResolvedClassConfig<'dropdownMenu'>>(
  () => getCustomComponentVariant('dropdownMenu', theme.value, { variant: props.variant }),
)

useProvideDropdownMenuContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: dropdownMenuStyle,
})
</script>

<template>
  <TestIdProvider :test-id="testId">
    <InteractableElement :is-disabled="isDisabled">
      <RekaDropdownMenuRoot v-model:open="isOpen">
        <slot />
      </RekaDropdownMenuRoot>
    </InteractableElement>
  </TestIdProvider>
</template>
