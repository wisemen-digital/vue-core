---
sidebar: auto
---


# AppTextarea
<script setup>
import AppTextareaPlayground from './AppTextareaPlayground.vue'
</script>

<AppTextareaPlayground />


## Props

| Prop       | Type                                                                    | Description                                          | Default     |
| ---------- | ----------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| id         | `null` \| `string`                                                      | The id of the input.                                 | `null`      |
| isDisabled | `boolean`                                                               | Whether the input is disabled.                       | `false`     |
| isInvalid  |  `boolean`                                                              | Whether the input is invalid.                        | `false`     |
| heightClass| `null` \| `string`                                                      | The height class of the textarea.                    | `null`      |
| placeholder| `null` \| `string`                                                      | The placeholder of the input.                        | `null`      |
| resize     | `'both'` \|  `'hoprizontal'` \|  `'none'` \|  `'vertical'`              | The resize property of the textarea.                 | `'none'`    |


## v-model

| Model                  | Type               | Description                               |
|------------------------|--------------------|-------------------------------------------|
| v-model **(required)** | `null` \| `string` | The value of the text.                    |


## Events

| Event Name | Type | Description                            |
| ---------- | ---- | -------------------------------------- |
| blur       | None | Emitted when the combobox loses focus. |
| focus      | None | Emitted when the input gains focus.    |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTextarea } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppTextarea v-model="value" />
</template>

```

```vue [Source code]
<script setup lang="ts">
const props = withDefaults(defineProps<{
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
   * The height class of the textarea.
   * @default null
   */
  heightClass?: null | string
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
  id: null,
  isDisabled: false,
  isInvalid: false,
  heightClass: null,
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
    class="size-full rounded-input border border-solid bg-input px-3 py-2 text-sm text-input-foreground outline-none ring-offset-background transition-shadow duration-200 placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed"
    @blur="onBlur"
    @focus="onFocus"
  />
</template>

```

:::