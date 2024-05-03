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
|`'default'`| None | Trigger element for the popover     |
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
        <AppText variant="subtitle" class="pr-8 font-bold text-black">A title</AppText>
        <AppText variant="body" class="text-black">And some content</AppText>
      </div>
    </template>
  </AppPopover>
</template>
```

```vue [Source code]
<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
} from 'radix-vue'
import { useSlots } from 'vue'

import AppPopoverCloseButton from '@/components/popover/AppPopoverCloseButton.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The alignment of the popover content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean
    /**
     * The offset of the popover content.
     * @default 10
     */
    offset?: number
    /**
     * The side of the trigger the popover should be on.
     * @default 'bottom'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    hideArrow: false,
    offset: 10,
    side: 'bottom',
  },
)

const slots = useSlots()

if (slots.default === undefined) {
  throw new Error('[POPOVER] The `trigger` slot is required.')
}
</script>

<template>
  <PopoverRoot>
    <AppPopoverTrigger>
      <slot />
    </AppPopoverTrigger>

    <PopoverPortal>
      <!-- eslint-disable tailwindcss/no-custom-classname -->
      <PopoverContent
        :align="props.align"
        :has-arrow="!props.hideArrow"
        :side="props.side"
        :side-offset="props.offset"
        class="popover-content rounded-popover bg-popover shadow-popover-shadow"
      >
        <!-- eslint-enable tailwindcss/no-custom-classname -->
        <AppPopoverCloseButton class="!absolute right-0 top-0" />

        <slot name="content" />

        <PopoverArrow
          v-if="!props.hideArrow"
          :as-child="true"
        >
          <div class="relative z-popover -mb-4 h-4 w-10 overflow-hidden">
            <div
              class="absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow"
            />
          </div>
        </PopoverArrow>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

:::