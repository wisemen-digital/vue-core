<script setup lang="ts">
import { computed, useSlots } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useInputStyle } from '@/components/input/input.style'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useComponentAttrs } from '@/composables/component-attrs/componentAttrs.composable'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
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
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
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
  id: null,
  testId: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  isReadonly: false,
  iconLeft: null,
  iconRight: null,
  placeholder: null,
  type: 'text',
})

defineSlots<{
  /** Replace the left icon with custom content */
  left: () => void
  /** Replace the right icon with custom content */
  right: () => void
}>()

const model = defineModel<null | string>({
  required: true,
})

const slots = useSlots()

const { classAttr, otherAttrs } = useComponentAttrs()
const inputStyle = useInputStyle()

const containerClasses = computed<string>(() => inputStyle.container({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
  class: classAttr.value,
}))
const leftIconClasses = computed<string>(() => inputStyle.leftIcon())
const rightIconClasses = computed<string>(() => inputStyle.rightIcon())
const inputClasses = computed<string>(() => inputStyle.input())
const loaderClasses = computed<string>(() => inputStyle.loader())
</script>

<template>
  <label
    :aria-disabled="props.isDisabled"
    :class="containerClasses"
  >
    <slot
      v-if="slots.left !== undefined"
      name="left"
    />

    <AppIcon
      v-else-if="props.iconLeft !== null"
      :icon="props.iconLeft"
      :class="leftIconClasses"
    />

    <!-- I'm not sure why, but without the `.stop` modifier, the events seem to fire twice -->
    <input
      v-bind="otherAttrs"
      :id="props.id ?? undefined"
      v-model="model"
      :type="props.type"
      :readonly="props.isReadonly"
      :data-testid="props.testId"
      :aria-invalid="props.isInvalid"
      :disabled="props.isDisabled"
      :placeholder="props.placeholder ?? undefined"
      :class="inputClasses"
    >

    <AppLoader
      v-if="props.isLoading"
      :class="loaderClasses"
    />

    <slot
      v-else-if="slots.right !== undefined"
      name="right"
    />

    <AppIcon
      v-else-if="props.iconRight !== null"
      :icon="props.iconRight"
      :class="rightIconClasses"
    />
  </label>
</template>

<style lang="postcss" scoped>
input::-webkit-datetime-edit {
  @apply h-full
}

input::-webkit-datetime-edit-fields-wrapper {
  @apply flex items-center h-full
}
</style>
