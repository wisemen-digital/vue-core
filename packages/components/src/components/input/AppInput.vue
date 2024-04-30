<script setup lang="ts">
<<<<<<< HEAD
import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { Icon } from '@/icons/icons'
=======
import { useSlots } from 'vue'

import { useComponentAttrs } from '../../composables/componentAttrs.composable'
import type { Icon } from '../../icons/icons'
import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'
>>>>>>> origin/master

const props = withDefaults(defineProps<{
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   * @default false
   */
  isInvalid?: boolean
  /**
   * Whether the input is loading.
   */
  isLoading?: boolean
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The type of the input.
   * @default 'text'
   */
  type?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
}>(), {
  iconLeft: undefined,
  iconRight: undefined,
  id: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  placeholder: null,
  type: 'text',
})

const model = defineModel<null | string>({
  required: true,
})

const slots = useSlots()

const { classAttr, otherAttrs } = useComponentAttrs()
</script>

<template>
  <label
    :aria-disabled="props.isDisabled"
    :class="[
      classAttr,
      {
        'border-input-border [&:has(:focus-visible)]:border-primary [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
        'border-destructive [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
      },
    ]"
    class="relative flex h-10 items-center rounded-input border border-solid bg-input outline-none ring-offset-1 ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <Component
      :is="slots.left"
      v-if="slots.left !== undefined"
    />

    <AppIcon
      v-else-if="props.iconLeft !== null && props.iconLeft !== undefined"
      :icon="props.iconLeft"
      class="ml-3 text-muted-foreground"
    />

    <!-- I'm not sure why, but without the `.stop` modifier, the events seem to fire twice -->
    <input
      v-bind="otherAttrs"
      :id="props.id ?? undefined"
      v-model="model"
      :type="props.type"
      :aria-invalid="props.isInvalid"
      :disabled="props.isDisabled"
      :placeholder="props.placeholder ?? undefined"
      class="block size-full truncate bg-transparent px-3 text-sm text-input-foreground outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed"
    >

    <AppLoader
      v-if="props.isLoading"
      class="mr-3 size-4 text-muted-foreground"
    />

    <Component
      :is="slots.right"
      v-else-if="slots.right !== undefined"
    />

    <AppIcon
      v-else-if="props.iconRight !== null && props.iconRight !== undefined"
      :icon="props.iconRight"
      class="mr-3 text-muted-foreground"
    />
  </label>
</template>
