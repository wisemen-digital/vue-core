---
sidebar: auto
---

# AppInput
<script setup>
import AppInputPlayground from './AppInputPlayground.vue'
</script>

<AppInputPlayground />


## Props

| Prop        | Type                                                                                     | Description                                       | Default     |
|-------------|------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| id          | `null` \| `string`                                                                       | The id of the input.                              | `null`      |
| iconLeft    | `Icon` \| `null`                                                                         | The left icon of the input.                       | `null`      |
| iconRight   | `Icon` \| `null`                                                                         | The right icon of the input.                      | `null`      |
| isDisabled  | `boolean`                                                                                | Whether the input is disabled.                    | `false`     |
| isInvalid   | `boolean`                                                                                | Whether the input is invalid.                     | `false`     |
| isLoading   | `boolean`                                                                                | Whether the input is loading.                     | `false`     |
| placeholder | `null` \| `string`                                                                       | The placeholder of the input.                     | `null`      |
| type        | `'date'` \| `'datetime-local'` \| `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'time'` \| `'url'` | The type of the input.               | `'text'`    |


## Slots

| Slot name | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| `left`      | None | Replace the left icon with custom content |
| `right`     | None | Replace the right icon with custom content|


## v-model

| Prop     | Type                 | Description  |
|----------|----------------------|--------------|
| v-model **(required)**  | `string` \| `null`  | The value of the input.        |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| `blur`      | Emitted when the input loses focus.                  |
| `focus`     | Emitted when the input gains focus.                  |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppInput } from '@wisemen/vue-core'

const value = ref<string | null>(null)
</script>
  
<template>
  <AppInput v-model="value" />
</template>
```

```vue [Source code]
<script setup lang="ts">
import { useSlots } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { Icon } from '@/icons/icons'

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
   * Whether the input is loading.
   */
  isLoading?: boolean
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
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: undefined,
  iconRight: undefined,
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
```

:::