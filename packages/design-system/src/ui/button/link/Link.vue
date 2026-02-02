<script setup lang="ts">
import {
  computed,
  useAttrs,
} from 'vue'
import { RouterLink } from 'vue-router'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import type { LinkProps } from '@/ui/button/link/link.props'
import LinkIcon from '@/ui/button/link/LinkIcon.vue'
import { UIRowLayout } from '@/ui/row-layout/index'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<LinkProps>(), {
  iconLeft: null,
  iconRight: null,
  keyboardShortcut: null,
  link: null,
  size: 'md',
  to: null,
  tooltipLabel: null,
  variant: 'primary',
})

const attrs = useAttrs()

if (props.link === null && props.to === null) {
  throw new Error('Either `link` or `to` must be provided.')
}

const component = computed<'a' | typeof RouterLink>(() => {
  if (props.to !== null) {
    return RouterLink
  }

  return 'a'
})

const linkAttributes = computed<Record<string, unknown>>(() => {
  if (props.to !== null) {
    return {
      to: props.to,
    }
  }

  if (props.link !== null) {
    return {
      href: props.link.href,
      rel: props.link.rel,
      target: props.link.target,
    }
  }

  return {}
})
</script>

<template>
  <ActionTooltip
    :is-disabled="props.tooltipLabel === null && props.keyboardShortcut === null"
    :label="props.tooltipLabel ?? props.label"
    :keyboard-shortcut="props.keyboardShortcut"
  >
    <!-- This component contains a lot of hacky code to get the glassy look working -->
    <Component
      :is="component"
      v-bind="{
        ...linkAttributes,
        ...attrs,
      }"
      :class="{
        // Size
        'h-7 min-w-7 rounded-sm px-md': props.size === 'md',
        'h-8 min-w-8 rounded-sm px-lg': props.size === 'lg',
        'h-6 min-w-6 rounded-xs px-sm': props.size === 'sm',
        'h-5.5 min-w-5.5 rounded-xs px-xs': props.size === 'xs',
        'dark:p-px': props.variant === 'primary',
        // Variant
        'dark:glassy border-brand-600 bg-brand-solid hover:brightness-95 focus-visible:outline-fg-brand-primary dark:border-none': props.variant === 'primary',
        'border-secondary bg-primary hover:bg-primary-hover focus-visible:outline-fg-brand-primary': props.variant === 'secondary',
        'border-transparent hover:bg-primary-hover focus-visible:outline-fg-brand-primary': props.variant === 'tertiary',
        'border-error-600 bg-error-solid hover:brightness-95 focus-visible:outline-fg-error-primary': props.variant === 'destructive-primary',
        'border-transparent hover:bg-error-primary focus-visible:outline-fg-error-primary': props.variant === 'destructive-tertiary',
      }"
      class="
        group/link shrink-0 cursor-pointer items-center justify-center border
        outline-2 outline-offset-1 outline-transparent duration-100
      "
    >
      <div
        :class="{
          'dark:rounded-[0.35rem] dark:px-md': props.size === 'md' && props.variant === 'primary',
          'dark:rounded-[0.3rem] dark:px-lg': props.size === 'lg' && props.variant === 'primary',
          'dark:rounded-[0.2rem] dark:px-sm': props.size === 'sm' && props.variant === 'primary',
          'dark:rounded-[0.15rem] dark:px-xs': props.size === 'xs' && props.variant === 'primary',
          'dark:glassy-inner-content': props.variant === 'primary',
        }"
        class="grid size-full [grid-template-areas:'stack']"
      >
        <UIRowLayout
          gap="sm"
          class="
            duration-100 [grid-area:stack]
            group-active/link:scale-98
          "
        >
          <LinkIcon
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
              'text-primary-on-brand': props.variant === 'primary',
              'text-secondary': props.variant === 'secondary' || props.variant === 'tertiary',
              'text-white': props.variant === 'destructive-primary',
              'text-error-primary': props.variant === 'destructive-tertiary',
            }"
            class=""
          >
            {{ props.label }}
          </span>

          <LinkIcon
            v-if="props.iconRight !== null"
            :icon="props.iconRight"
            :size="props.size"
            :variant="props.variant"
          />
        </UIRowLayout>
      </div>
    </Component>
  </ActionTooltip>
</template>
