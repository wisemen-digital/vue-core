<script setup lang="ts">
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { useAttrs } from 'vue'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import type { DropdownMenuItemProps } from '@/components/dropdown-menu/dropdownMenu.props'
import { useProvideDropdownMenuItemContext } from '@/components/dropdown-menu/dropdownMenuItem.context'
import DropdownMenuItemIcon from '@/components/dropdown-menu/parts/DropdownMenuItemIcon.vue'
import DropdownMenuItemLabel from '@/components/dropdown-menu/parts/DropdownMenuItemLabel.vue'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { mergeClasses } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DropdownMenuItemProps>(), {
  id: null,
  testId: null,
  isDestructive: false,
  isDisabled: false,
  icon: null,
})

const emit = defineEmits<{
  /**
   * Emitted when the item is selected.
   */
  select: []
}>()

const attrs = useAttrs()

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()

useProvideDropdownMenuItemContext(toComputedRefs(props))
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaDropdownMenuItem
        :data-destructive="props.isDestructive || undefined"
        :class="style.item({
          class: mergeClasses(customClassConfig.item, classConfig?.item, attrs.class as string),
        })"
        @select="emit('select')"
      >
        <slot>
          <DropdownMenuItemIcon />
          <DropdownMenuItemLabel />

          <slot name="right" />
        </slot>
      </RekaDropdownMenuItem>
    </InteractableElement>
  </PrimitiveElement>
</template>
