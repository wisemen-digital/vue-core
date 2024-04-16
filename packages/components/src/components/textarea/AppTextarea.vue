<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * The height class of the textarea.
   * @default null
   */
  heightClass?: null | string
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
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The resize property of the textarea.
   * @default 'none'
   */
  resize?: 'both' | 'horizontal' | 'none' | 'vertical'
}>(), {
  heightClass: null,
  id: null,
  isDisabled: false,
  isInvalid: false,
  placeholder: null,
  resize: 'none',
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
  <textarea
    :id="props.id ?? undefined"
    v-model="model"
    :aria-invalid="props.isInvalid"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder ?? undefined"
    :class="[
      props.heightClass,
      {
        'border-input-border focus-visible:ring-ring': !props.isInvalid,
        'border-destructive focus-visible:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
        'resize-none': props.resize === 'none',
        'resize': props.resize === 'both',
        'resize-x': props.resize === 'horizontal',
        'resize-y': props.resize === 'vertical',
      },
    ]"
    class="size-full rounded-input border border-solid bg-input px-3 py-2 text-sm text-input-foreground outline-none ring-offset-background transition-shadow duration-200 placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
    @blur="onBlur"
    @focus="onFocus"
  />
</template>
