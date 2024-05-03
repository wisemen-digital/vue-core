---
sidebar: auto
---


# AppTagsInput
<script setup>
import AppTagsInputPlayground from './AppTagsInputPlayground.vue'
</script>

<AppTagsInputPlayground />


## Props

| Prop        | Type                                                                                     | Description                                       | Default     |
|-------------|------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| id          | `null` \| `string`                                                                       | The id of the input.                              | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isInvalid   | `boolean`                                                                                | Whether the input is invalid.                     | `false`     |
| max         | `null` \| `number`                                                                       | The maximum amount of tags allowed.               | `null`      |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |


## Slots

| Slot name | Type            | Description                |
| --------- | --------------- | -------------------------- |
| `tag`     | `value: TValue` | Override the tag rendering |


## v-model

| Prop                    | Type        | Description               |
|------------------------ | ----------- | ------------------------- |
| v-model **(required)**  | `TValue[]`  | The value of the input.   |


## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| `blur`      | Emitted when the input loses focus.                  |
| `focus`     | Emitted when the input gains focus.                  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTagsInput } from '@wisemen/vue-core'

const model = ref<string[]>([])
</script>
  
<template>
  <AppTagsInput
    v-model="model"
    id="id-app-tags-input"
    placeholder="Placeholder"
    :max="5"
    :is-disabled="false"
    :is-invalid="false"
  />
</template>
```

```vue [Source code]
<script setup lang="ts" generic="TValue extends string">
import {
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'

import AppTagsInputItem from '@/components/tags-input/AppTagsInputItem.vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isInvalid?: boolean
  max?: null | number
  placeholder?: null | string
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
  max: null,
  placeholder: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<TValue[]>({
  required: true,
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <TagsInputRoot
    v-model="model"
    :disabled="props.isDisabled"
    :add-on-paste="true"
    :max="props.max ?? undefined"
    :class="[
      model.length === 0 ? 'px-2' : 'px-1',
      {
        'border-input-border focus-within:ring-ring': !props.isInvalid,
        'border-destructive focus-within:ring-destructive': props.isInvalid,
      },
    ]"
    class="flex min-h-10 w-full flex-wrap items-center gap-1 rounded-input border border-solid bg-input py-1 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <template
      v-for="tag of model"
      :key="tag"
    >
      <slot
        :value="tag"
        name="tag"
      >
        <AppTagsInputItem
          :value="tag"
          :display-fn="(tag) => tag"
          :is-disabled="props.isDisabled"
        />
      </slot>
    </template>

    <TagsInputInput
      :id="id"
      :placeholder="props.placeholder ?? undefined"
      :class="{
        'cursor-not-allowed opacity-50': props.isDisabled,
      }"
      class="flex-1 bg-transparent p-1 text-sm outline-none placeholder:text-input-placeholder"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TagsInputRoot>
</template>
```

:::