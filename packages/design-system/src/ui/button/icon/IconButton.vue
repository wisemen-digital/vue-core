<script setup lang="ts">
import { useAttrs } from 'vue'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import type { IconButtonProps } from '@/ui/button/icon/iconButton.props'
import IconButtonIcon from '@/ui/button/icon/IconButtonIcon.vue'
import Loader from '@/ui/loader/Loader.vue'
import { UIRowLayout } from '@/ui/row-layout/index'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IconButtonProps>(), {
  isDisabled: false,
  isLoading: false,
  isTooltipDisabled: false,
  form: null,
  keyboardShortcut: null,
  size: 'md',
  tooltipLabel: null,
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const attrs = useAttrs()

function onClick(event: MouseEvent): void {
  if (props.isLoading) {
    event.preventDefault()

    return
  }

  emit('click', event)
}
</script>

<template>
  <ActionTooltip
    :is-disabled="props.isTooltipDisabled"
    :label="props.tooltipLabel ?? props.label"
    :keyboard-shortcut="props.keyboardShortcut"
  >
    <!-- This component contains a lot of hacky code to get the glassy look working -->
    <button
      v-bind="attrs"
      :type="props.type"
      :form="props.form ?? undefined"
      :aria-disabled="props.isLoading"
      :disabled="props.isDisabled"
      :aria-busy="props.isLoading"
      :aria-label="props.label"
      :data-interactive="(!props.isDisabled && !props.isLoading) || undefined"
      :class="{
        // Size
        'size-7 rounded-sm': props.size === 'md',
        'size-8 rounded-md': props.size === 'lg',
        'size-6 rounded-sm': props.size === 'sm',
        'size-5.5 rounded-xs': props.size === 'xs',
        'dark:p-px': props.variant === 'primary',
        // Variant
        'border-brand-600 bg-brand-solid focus-visible:outline-fg-brand-primary disabled:border-disabled-subtle disabled:bg-disabled data-interactive:hover:brightness-95 data-interactive:dark:border-none data-interactive:dark:glassy': props.variant === 'primary',
        'border-secondary bg-primary focus-visible:outline-fg-brand-primary disabled:border-disabled-subtle disabled:bg-disabled data-interactive:hover:bg-primary-hover': props.variant === 'secondary',
        'border-transparent focus-visible:outline-fg-brand-primary data-interactive:hover:bg-primary-hover': props.variant === 'tertiary',
        'border-error-600 bg-error-solid focus-visible:outline-fg-error-primary disabled:border-disabled-subtle disabled:bg-disabled data-interactive:hover:brightness-95': props.variant === 'destructive-primary',
        'border-transparent focus-visible:outline-fg-error-primary data-interactive:hover:bg-error-primary': props.variant === 'destructive-tertiary',
      }"
      class="
        group/button shrink-0 cursor-pointer items-center justify-center border
        outline-2 outline-offset-1 outline-transparent duration-100
        not-data-interactive:cursor-not-allowed
      "
      @click="onClick"
    >
      <div
        :class="{
          'dark:rounded-[0.35rem]': props.size === 'md' && props.variant === 'primary',
          'dark:rounded-[0.3rem]': (props.size === 'lg' || props.size === 'sm') && props.variant === 'primary',
          'dark:rounded-[0.15rem]': props.size === 'xs' && props.variant === 'primary',
          'dark:glassy-inner-content': props.variant === 'primary',
        }"
        class="
          grid size-full items-center justify-center
          [grid-template-areas:'stack']
        "
      >
        <Loader
          :class="{
            'invisible opacity-0': !props.isLoading,
            'opacity-100': props.isLoading,
            // Size
            'size-3.5': props.size === 'md' || props.size === 'sm' || props.size === 'xs',
            'size-4': props.size === 'lg',
            // Variant
            'text-primary-on-brand group-disabled/button:text-disabled': props.variant === 'primary',
            'text-secondary group-disabled/button:text-disabled': props.variant === 'secondary' || props.variant === 'tertiary',
            'text-white group-disabled/button:text-disabled': props.variant === 'destructive-primary',
            'text-error-primary group-disabled/button:text-disabled': props.variant === 'destructive-tertiary',
          }"
          class="mx-auto duration-100 [grid-area:stack]"
        />

        <UIRowLayout
          :class="{
            'invisible opacity-0': props.isLoading,
            'opacity-100': !props.isLoading,
          }"
          gap="sm"
          class="
            duration-100 [grid-area:stack]
            group-not-disabled/button:group-active/button:scale-98
          "
        >
          <IconButtonIcon
            :icon="props.icon"
            :size="props.size"
            :variant="props.variant"
          />
        </UIRowLayout>
      </div>
    </button>
  </ActionTooltip>
</template>
