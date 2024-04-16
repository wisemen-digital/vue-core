<script setup lang="ts">
import type { Icon } from '../../icons/icons'
import AppIcon from '../icon/AppIcon.vue'
import type { IconStyleProps } from '../icon/icon.style'
import AppButton from './AppButton.vue'
import type { ButtonStyleProps } from './button.style'

const props = withDefaults(
  defineProps<{
    /**
     * The icon to display
     */
    icon: Icon
    /**
     * The size of the icon
     * @default default
     */
    iconSize?: IconStyleProps['size']
    /**
     * Whether the button is disabled
     * @default false
     */
    isDisabled?: boolean
    /**
     * Whether the button is loading
     * @default false
     */
    isLoading?: boolean
    /**
     * The label for the button for accessibility
     */
    label: string
    /**
     * The variant of the button
     * @default default
     */
    variant?: ButtonStyleProps['variant']
  }>(),
  {
    iconSize: 'default',
    isDisabled: false,
    isLoading: false,
    variant: 'default',
  },
)
</script>

<template>
  <AppButton
    :variant="props.variant"
    :aria-label="props.label"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    size="icon"
  >
    <AppIcon
      :icon="props.icon"
      :size="props.iconSize"
    />
  </AppButton>
</template>
