---
sidebar: auto
---


# AppPopover
<script setup>
import AppPopoverPlayground from './AppPopoverPlayground.vue'
</script>

<AppPopoverPlayground />


## Props

| Prop       | Type                                                            | Description                                          | Default     |
| ---------- | --------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| align      | `'center'` \| `'end'` \| `'start'`                              | The alignment of the popover content.                | `'center'`  |
| hideArrow  | `boolean`                                                       | When true, the arrow will be hidden.                 | `false`     |
| offset     | `number`                                                        | The offset of the popover content.                   | `10`        |
| side       | `'bottom'` \| `'left'` \| `'right'` \| `'top'`                  | The side of the trigger the popover should be on.    | `'bottom'`  |


## Slots

| Slot name | Type | Description                         |
| --------- | ---- | ----------------------------------- |
|`'default'`*| None | Trigger element for the popover     |
|`'content'`| None | Content of the popover              |

> ⚠️ The trigger element slot is required.


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppPopover } from '@wisemen/vue-core'
import { AppText } from '@wisemen/vue-core'
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <AppPopover v-bind="values">
    <template #default>
      <AppButton>
        Trigger element
      </AppButton>
    </template>
    <template #content>
      <div class="w-56 p-2">
        <AppText
          variant="subtitle"
          class="pr-8 font-bold text-black"
        >
          A title
        </AppText>
        <AppText
          variant="body"
          class="text-black"
        >
          And some content
        </AppText>
      </div>
    </template>
  </AppPopover>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/popover/AppPopover.vue).