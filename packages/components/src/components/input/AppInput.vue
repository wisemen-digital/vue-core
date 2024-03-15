<script setup lang="ts">
import type { Icon } from '@/icons/icons'

import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'

const props = withDefaults(defineProps<{
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon | null
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

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
  required: true,
})

function onBlur(): void {
  emit('blur')
}

function onFocus(): void {
  emit('focus')
}
</script>

<template>
  <label
    :aria-disabled="props.isDisabled"
    :class="{
      'border-input-border focus-within:ring-ring': !props.isInvalid,
      'border-destructive focus-within:ring-destructive': props.isInvalid,
      'cursor-not-allowed opacity-50': props.isDisabled,
    }"
    class="flex h-10 items-center rounded-input border border-solid bg-input ring-offset-background duration-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
  >
    <slot name="left">
      <AppIcon
        v-if="props.iconLeft !== null && props.iconLeft !== undefined"
        :icon="props.iconLeft"
        class="ml-3 text-input-foreground"
      />
    </slot>

    <input
      :id="props.id ?? undefined"
      v-model="model"
      :type="props.type"
      :aria-invalid="props.isInvalid"
      :disabled="props.isDisabled"
      :placeholder="props.placeholder ?? undefined"
      class="block size-full truncate bg-transparent px-3 py-2 text-sm text-input-foreground outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed"
      @blur="onBlur"
      @focus="onFocus"
    >

    <AppLoader
      v-if="props.isLoading"
      class="mr-3 size-4 text-muted-foreground"
    />

    <slot
      v-else
      name="right"
    >
      <AppIcon
        v-if="props.iconRight !== null && props.iconRight !== undefined"
        :icon="props.iconRight"
        class="mr-3 text-input-foreground"
      />
    </slot>
  </label>
</template>
