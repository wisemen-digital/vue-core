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
| iconSize             | `'full'` \| `'xs'` \| `'sm'` \| `'default'` \| `'lg'` \| `'xl'` \| `'xxl'`                             | The size of the icon                                            | `'default'` |
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
import type { Icon } from '../../icons/icons'
import AppIcon from '../icon/AppIcon.vue'
import type { IconStyleProps } from '../icon/icon.style'
import AppButton from './AppButton.vue'
import type { ButtonStyleProps } from './button.style'

const props = withDefaults(
  defineProps<{
    /**
     * The icon to display
     */
    icon: Icon
    /**
     * The size of the icon
     * @default default
     */
    iconSize?: IconStyleProps['size']
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
     * The label for the button for accessibility
     */
    label: string
    /**
     * The variant of the button
     * @default default
     */
    variant?: ButtonStyleProps['variant']
  }>(),
  {
    iconSize: 'default',
    isDisabled: false,
    isLoading: false,
    variant: 'default',
  },
)
</script>

<template>
  <AppButton
    :variant="props.variant"
    :aria-label="props.label"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    size="icon"
  >
    <AppIcon
      :icon="props.icon"
      :size="props.iconSize"
    />
  </AppButton>
</template>
```
:::

