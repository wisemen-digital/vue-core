<script setup lang="ts">
import { DropdownMenuRoot as RekaDropdownMenuRoot } from 'reka-ui'
import { computed } from 'vue'

import { useProvideDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import type { DropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props'
import type { CreateDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import { createDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isPopoverArrowHidden: false,
  classConfig: null,
  popoverAlign: 'center',
  popoverAnchorReferenceElement: null,
  popoverCollisionPadding: 10,
  popoverContainerElement: null,
  popoverOffset: 10,
  popoverSide: 'bottom',
  popoverWidth: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const dropdownMenuStyle = computed<CreateDropdownMenuStyle>(
  () => createDropdownMenuStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('dropdownMenu', { variant: props.variant ?? undefined })

useProvideDropdownMenuContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: dropdownMenuStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <InteractableElement :is-disabled="isDisabled">
      <RekaDropdownMenuRoot v-model:open="isOpen">
        <slot />
      </RekaDropdownMenuRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
