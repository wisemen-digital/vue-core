<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import type { ButtonStyleProps } from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { IconStyleProps } from '@/components/icon/icon.style'
import type { Icon } from '@/icons/icons'

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
