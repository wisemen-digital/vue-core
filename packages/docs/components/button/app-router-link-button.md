---
sidebar: auto
---
<script setup>
import AppRouterLinkButtonPlayground from './AppRouterLinkButtonPlayground.vue'
</script>


# AppRouterLinkButton

<AppRouterLinkButtonPlayground />

## Props

| Prop              | Type                                                                                                   | Description                                          | Default     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------- |
| to **(required)** | `RouteLocationNamedRaw`                                                                                | The route to link to.                                |             |
| variant           | `'default'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'destructive'` \| `'destructive-outline'` | The variant of the button.                           | `'default'` |
| size              | `'xs'` \|  `'sm'` \| `'default'` \| `'lg'`  \|  `'unset'`  \|  `'icon'`                                | The size of the button.                              | `'default'` |
| iconLeft          | `Icon` \| `null`                                                                                       | The icon to display on the left side of the button.  | `null`      |
| iconRight         | `Icon` \| `null`                                                                                       | The icon to display on the right side of the button. | `null`      |

## Slots

| Slot      | Type | Description               |
| --------- | ---- | ------------------------- |
| `default` | None | The content of the button |

## v-model

None

## Events

None



## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppRouterLinkButton } from '@wisemen/vue-core'
</script>

<template>
  <AppRouterLinkButton 
    :to="{
      name: 'route-name'
    }"
  >
    Button Text
  </AppRouterLinkButton>
</template>
```

```vue [Source code]
<script setup lang="ts">
import { computed } from 'vue'
import { type RouteLocationNamedRaw, RouterLink } from 'vue-router'

import type { Icon } from '../../icons/icons'
import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'
import type { ButtonStyleProps } from './button.style'
import { button } from './button.style'

interface Props {
  /**
   * The icon to display on the left side of the button.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The icon to display on the right side of the button.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The size of the button.
   * @default 'default'
   */
  size?: ButtonStyleProps['size']
  /**
   * The route to link to.
   */
  to: RouteLocationNamedRaw
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: ButtonStyleProps['variant']
}

const props = withDefaults(defineProps<Props>(), {
  // TODO: find out why defaulting these to `null` breaks the `Icon` prop type when using `declare module`.
  // iconLeft: undefined,
  // iconRight: undefined,
  isLoading: false,
  size: 'default',
  type: 'button',
  variant: 'default',
})

const buttonClasses = computed<string>(() =>
  button({
    size: props.size,
    variant: props.variant,
  }))
</script>

<template>
  <RouterLink
    :to="props.to"
    :class="buttonClasses"
  >
    <AppIcon
      v-if="props.iconLeft !== null && props.iconLeft !== undefined"
      :icon="props.iconLeft"
      :class="{
        'opacity-0': props.isLoading,
      }"
      class="mr-3"
    />

    <span
      :class="{
        'opacity-0': props.isLoading,
      }"
    >
      <slot />
    </span>

    <div
      v-if="props.isLoading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <AppLoader
        class="size-4"
      />
    </div>

    <AppIcon
      v-if="props.iconRight !== null && props.iconRight !== undefined"
      :icon="props.iconRight"
      :class="{
        'opacity-0': props.isLoading,
      }"
      class="ml-3"
    />
  </RouterLink>
</template>
```

:::


