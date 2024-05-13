---
sidebar: auto
---

# AppCommand
<script setup>
import AppCommandPlayground from './AppCommandPlayground.vue'
</script>

<AppCommandPlayground />


## Props

| Prop        | Type               | Description                             | Default |
| -----       | ------------------ | --------------------------------------- | ------- |
| items       | `CommandItem[]`    | The items to display in the combobox.   | ------- |
| placeholder | `string`           | The placeholder of the combobox         | ------- |

## Types

::: code-group
```ts [CommandItem]
export interface CommandOption {
  icon?: Icon
  image?: string
  label: string
  onSelect: () => void
}

export type CommandItem = CommandOption
```
:::


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppCommand } from '@wisemen/vue-core'

const items: CommandItem[] = [
  {
    icon: 'alertCircle',
    label: 'Command with icon',
    type: 'page',
  },
  {
    label: 'Command with select function',
    type: 'page',
    onSelect,
  },
]
</script>
  
<template>
  <AppCommand :items="items" />
</template>
```

```vue [Source code]
<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxRoot,
  ComboboxViewport,
} from 'radix-vue'
import { ref } from 'vue'

import AppCommandItem from '@/components/command/AppCommandItem.vue'
import type { CommandItem } from '@/types/commandItem.type'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = defineProps<{
  /**
   * The items to display in the combobox.
   */
  items: CommandItem[]
  /**
   * The placeholder of the combobox.
   */
  placeholder: string
}>()

const search = ref<string>('')
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div>
    <ComboboxRoot
      v-model:search-term="search"
      :open="true"
      model-value=""
      class="rounded-lg bg-background shadow-popover-shadow"
    >
      <ComboboxAnchor>
        <ComboboxInput
          :auto-focus="true"
          :placeholder="placeholder"
          class="w-full truncate border-b border-solid border-border bg-transparent p-5 text-lg outline-none placeholder:text-input-placeholder"
        />
      </ComboboxAnchor>

      <ComboboxContent :force-mount="true">
        <ComboboxViewport>
          <ComboboxEmpty>
            Empty
          </ComboboxEmpty>

          <div class="p-2">
            <AppCommandItem
              v-for="item of props.items"
              :key="item.label"
              :item="item"
            />
          </div>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>
  </div>
</template>
```

:::