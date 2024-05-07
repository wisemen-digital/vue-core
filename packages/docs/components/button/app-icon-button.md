---
sidebar: auto
---
<script setup>
import AppIconButtonPlayground from './AppIconButtonPlayground.vue'
import AppIconButtonCode from '@components/components/button/AppIconButton.vue?raw'
</script>


# AppIconButton
<AppIconButtonPlayground />

## Props

| Prop                 | Type                                                                                                   | Description                                                     | Default     |
| -------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| variant              | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button                                       | `'default'` |
| icon **(required)**  | `Icon`                                                                                                 | The icon to display                                             |             |
| label **(required)** | `string`                                                                                               | The label for the button for accessibility. Will not be visible | -           |
| size                  | `'xs'` \|  `'sm'` \| `'default'` \| `'lg'`  \|  `'unset'`                                             | The size of the button.                                         | `'default'` |
| isDisabled           | `boolean`                                                                                              | Whether the button is disabled.                                 | `false`     |
| isLoading            | `boolean`                                                                                              | Whether the button is in a loading state.                       | `false`     |

## Slots

None

## v-model

None

## Events

None

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppIconButton } from '@wisemen/vue-core'
</script>

<template>
  <AppIconButton
    icon="info"
    label="Info button"
  />
</template>

```

```vue [Source code]
<script setup lang="ts">
import { computed } from 'vue'

import { iconButton, type IconButtonStyleProps } from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { IconStyleProps } from '@/components/icon/icon.style'
import AppLoader from '@/components/loader/AppLoader.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(
  defineProps<{
    /**
     * Whether the button is disabled
     * @default false
     */
    isDisabled?: boolean
    /**
     * Whether the button is loading
     * @default false
     */
    isLoading?: boolean
    /**
     * The icon to display
     */
    icon: Icon
    /**
     * The label for the button for accessibility
     */
    label: string
    /**
     * The size of the button
     * @default default
     */
    size?: IconButtonStyleProps['size']
    /**
     * The type of the button.
     * @default 'button'
     */
    type?: 'button' | 'reset' | 'submit'
    /**
     * The variant of the button
     * @default default
     */
    variant?: IconButtonStyleProps['variant']
  }>(),
  {
    isDisabled: false,
    isLoading: false,
    size: 'default',
    type: 'button',
    variant: 'default',
  },
)

const buttonClasses = computed<string>(() =>
  iconButton({
    size: props.size,
    variant: props.variant,
  }))

const iconSize = computed<IconStyleProps['size']>(() => {
  if (props.size === 'sm' || props.size === 'xs') {
    return 'sm'
  }

  if (props.size === 'lg') {
    return 'lg'
  }

  if (props.size === 'default') {
    return 'default'
  }

  return 'full'
})
</script>

<template>
  <button
    :variant="props.variant"
    :aria-label="props.label"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    :class="buttonClasses"
    :disabled="isDisabled || isLoading"
  >
    <div
      v-if="props.isLoading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <AppLoader class="size-4" />
    </div>

    <AppIcon
      v-else
      :icon="props.icon"
      :size="iconSize"
    />
  </button>
</template>
```
:::

