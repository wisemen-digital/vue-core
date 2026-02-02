<script setup lang="ts">
import { useAttrs } from 'vue'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import type { ButtonProps } from '@/ui/button/button/button.props'
import ButtonIcon from '@/ui/button/button/ButtonIcon.vue'
import Loader from '@/ui/loader/Loader.vue'
import { UIRowLayout } from '@/ui/row-layout/index'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonProps>(), {
  isDisabled: false,
  isLoading: false,
  form: null,
  iconLeft: null,
  iconRight: null,
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
    :is-disabled="props.tooltipLabel === null && props.keyboardShortcut === null"
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
      :data-interactive="(!props.isDisabled && !props.isLoading) || undefined"
      :class="{
        // Size
        'h-7 min-w-7 rounded-sm px-md': props.size === 'md',
        'h-8 min-w-8 rounded-sm px-lg': props.size === 'lg',
        'h-6 min-w-6 rounded-xs px-sm': props.size === 'sm',
        'h-5.5 min-w-5.5 rounded-xs px-xs': props.size === 'xs',
        'dark:p-px': props.variant === 'primary',
        // Variant
        'border-brand-600 bg-brand-solid focus-visible:outline-fg-brand-primary disabled:border-disabled-subtle disabled:bg-disabled data-interactive:hover:brightness-95 not-data-disabled:dark:border-0! not-data-disabled:dark:glassy': props.variant === 'primary',
        'border-secondary bg-primary focus-visible:outline-fg-brand-primary disabled:border-disabled-subtle disabled:bg-disabled data-interactive:hover:bg-secondary': props.variant === 'secondary',
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
          'dark:rounded-[0.35rem] dark:px-md': props.size === 'md' && props.variant === 'primary',
          'dark:rounded-[0.3rem] dark:px-lg': props.size === 'lg' && props.variant === 'primary',
          'dark:rounded-[0.2rem] dark:px-sm': props.size === 'sm' && props.variant === 'primary',
          'dark:rounded-[0.15rem] dark:px-xs': props.size === 'xs' && props.variant === 'primary',
          'dark:glassy-inner-content': props.variant === 'primary',
        }"
        class="grid size-full items-center [grid-template-areas:'stack']"
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
          class="mx-auto items-center duration-100 [grid-area:stack]"
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
          <slot name="left" />

          <ButtonIcon
            v-if="props.iconLeft !== null"
            :icon="props.iconLeft"
            :size="props.size"
            :variant="props.variant"
          />

          <span
            :class="{
              // Size
              'text-xs': props.size === 'md' || props.size === 'sm' || props.size === 'xs',
              'text-sm': props.size === 'lg',
              // Variant
              'text-primary-on-brand group-disabled/button:text-disabled': props.variant === 'primary',
              'text-secondary group-disabled/button:text-disabled': props.variant === 'secondary' || props.variant === 'tertiary',
              'text-white group-disabled/button:text-disabled': props.variant === 'destructive-primary',
              'text-error-primary group-disabled/button:text-disabled': props.variant === 'destructive-tertiary',
            }"
            class=""
          >
            {{ props.label }}
          </span>

          <ButtonIcon
            v-if="props.iconRight !== null"
            :icon="props.iconRight"
            :size="props.size"
            :variant="props.variant"
          />
        </UIRowLayout>
      </div>
    </button>
  </ActionTooltip>
</template>
