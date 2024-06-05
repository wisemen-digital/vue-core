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
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/tooltip/AppTooltip.vue).