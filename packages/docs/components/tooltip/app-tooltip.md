---
sidebar: auto
---


# AppTooltip
<script setup>
import AppTooltipPlayground from '@docs/components/tooltip/AppTooltipPlayground.vue'
</script>

<AppTooltipPlayground/>


## Props

| Prop                       | Type                                                                         | Description                                                        | Default     |
| -------------------------- | -----------------------------------------------------------------------------| ------------------------------------------------------------------ | ----------- |
| align                      | `'center'` \| `'end'` \| `'start'`                                           | The alignment of the tooltip content.                              | `'center'`  |
| content                    | `null` \| `string`                                                           | The content to show in the tooltip.                                | `null`      |
| delayDuration              | `number`                                                                     | The duration in milliseconds to wait before showing the tooltip.   | `0`         |
| disableCloseOnTriggerClick | `boolean`                                                                    | When true, clicking on trigger will not close the content.         | `false`     |
| disableHoverableContent    | `boolean`                                                                    | When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.| `false`  |
| hideArrow                  | `boolean`                                                                    | When true, the arrow will be hidden.                               | `false`     |
| isHidden                   | `boolean`                                                                    | When true, the tooltip will be hidden.                             | `false`     |
| offset                     | `number`                                                                     | The offset of the tooltip content.                                 | `10`        |
| side                       | `'bottom'` \| `'left'` \| `'right'` \| `'top'`                               | The side of the trigger the tooltip should be on.                  | `'top'`     |


## Slots

| Slot name | Type | Description                         |
| --------- | ---- | ----------------------------------- |
|`'default'`| None | Trigger element for the toolip      |
|`'content'`| None | Override the content of the tooltip |

> ⚠️ Either the `content` prop or `content` slot must be provided.


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTooltip } from '@wisemen/vue-core'
import { AppText } from '@wisemen/vue-core'
</script>
  
<template>
  <AppTooltip content="Tooltip content">
      <AppText variant="body">
        Trigger element     
      </AppText>
  </AppTooltip>
</template>
```

```vue [Source code]
<script setup lang="ts">
import { TooltipPortal, TooltipTrigger } from 'radix-vue'
import { useSlots } from 'vue'

import AppText from '../text/AppText.vue'
import AppTooltipContent from './AppTooltipContent.vue'
import AppTooltipProvider from './AppTooltipProvider.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * The content to show in the tooltip.
     * @default null
     */
    content?: null | string
    /**
     * The duration in milliseconds to wait before showing the tooltip.
     * @default 0
     */
    delayDuration?: number
    /**
     * When true, clicking on trigger will not close the content.
     * @default false
     */
    disableCloseOnTriggerClick?: boolean
    /**
     * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @default false
     */
    disableHoverableContent?: boolean
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean
    /**
     * When true, the tooltip will be hidden.
     * @default false
     */
    isHidden?: boolean
    /**
     * The offset of the tooltip content.
     * @default 10
     */
    offset?: number
    /**
     * The side of the trigger the tooltip should be on.
     * @default 'top'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    content: null,
    delayDuration: 0,
    disableCloseOnTriggerClick: false,
    disableHoverableContent: false,
    hideArrow: false,
    isHidden: false,
    offset: 10,
    side: 'top',
  },
)

const slots = useSlots()

if (props.content === null && slots.content === undefined) {
  throw new Error('[TOOLTIP] Either the `content` prop or `content` slot must be provided.')
}
</script>

<template>
  <AppTooltipProvider
    :delay-duration="props.delayDuration"
    :disable-close-on-trigger-click="props.disableCloseOnTriggerClick"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <TooltipTrigger :as-child="true">
      <slot />
    </TooltipTrigger>

    <TooltipPortal>
      <AppTooltipContent
        v-if="!props.isHidden"
        :align="props.align"
        :has-arrow="!props.hideArrow"
        :offset="props.offset"
        :side="props.side"
      >
        <slot name="content">
          <AppText
            class="max-w-xs px-3 py-1.5 text-center text-sm text-popover-foreground"
            variant="subtext"
          >
            {{ props.content }}
          </AppText>
        </slot>
      </AppTooltipContent>
    </TooltipPortal>
  </AppTooltipProvider>
</template>

```

:::