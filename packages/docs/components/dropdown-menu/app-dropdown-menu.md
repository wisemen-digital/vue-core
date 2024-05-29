---
sidebar: auto
---


# AppDropdownMenu
<script setup>
import AppDropdownMenuPlayground from './AppDropdownMenuPlayground.vue'
</script>

<AppDropdownMenuPlayground />


## Props

| Prop                          | Type                                              | Description                                                                   | Default   |
| ----------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| hasArrow                      | `boolean`                                         | Whether the dropdown has an arrow.                                            | `false`   |
| align                         | `'center'` \|  `'end'` \| `'start'`               | The alignment of the dropdown.                                                | `'center'`|
| enableGlobalKeyboardShortcuts | `boolean`                                         | Whether keyboard commands are enabled without the need to focus the dropdown. | `false`   |
| inheritTriggerWidth           | `boolean`                                         | Whether to inherit the trigger's width.                                       | `false`   |
| items*                        | `DropdownMenuItem[]`                              | The dropdown items.                                                           |           |
| offset                        | `number`                                          | The offset of the dropdown.                                                   | `4`       |
| side                          |`'bottom'` \|  `'left'` \| `'right'` \| `'top'`    | The side of the dropdown.                                                     | `bottom`  |


## Types

::: code-group
```js [DropdownMenuItem]
export type DropdownMenuItem = DropdownMenuCheckbox
  | DropdownMenuDivider
  | DropdownMenuGroup
  | DropdownMenuLabel
  | DropdownMenuOption
  | DropdownMenuRadioGroup
  | DropdownMenuSubMenu

export interface DropdownMenuDivider {
  type: 'divider'
}

export interface DropdownMenuLabel {
  label: string
  type: 'label'
}

export interface DropdownMenuSubMenu {
  icon?: Icon
  items: DropdownMenuItem[]
  label: string
  render?: () => VNode
  type: 'subMenu'
}

export interface DropdownMenuGroup {
  items: DropdownMenuItem[]
  type: 'group'
}

export interface DropdownMenuOption {
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'option'
  onSelect: () => void
}

export interface DropdownMenuCheckbox {
  isSelected: Ref<boolean>
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'checkbox'
  onSelect: () => void
}

export interface DropdownMenuRadioGroup {
  items: DropdownMenuRadio[]
  modelValue: Ref<AcceptableValue | null>
  type: 'radioGroup'
  updateModelValue: (value: AcceptableValue) => void
}

export interface DropdownMenuRadio {
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'radio'
  value: AcceptableValue
}
```
::: 

## Slots

| Slot name   | Type | Description                                |
| ----------- | ---- | ------------------------------------------ |
| `'default'`*| None | Trigger element to show the dropdown items |
| `'header'`  | None |             |
| `'footer'`  | None |             |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppDropdownMenu } from '@wisemen/vue-core'

const exampleItems: DropdownMenuItem[] = [
  {
    type: 'option',
    label: 'Option 1',
    onSelect: () => {
      alert('Option 1 selected')
    },
    keyboardShortcutKeys: [
      'e',
    ],
  },
]
</script>
  
<template>
  <AppDropdownMenu
    :items="exampleItems"
  >
    <template #header>
      <AppText
        variant="body"
        class="p-2"
      >
        This is a header slot
      </AppText>
    </template>
    <template #default>
      <AppButton>
        Trigger element
      </AppButton>
    </template>     
  </AppDropdownMenu>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/dropdown-menu/AppDropdownMenu.vue).