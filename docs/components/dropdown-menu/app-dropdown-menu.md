---
sidebar: auto
---


# AppDropdownMenu

<!-- @include: ./app-dropdown-menu-meta.md -->

## Types

::: code-group
```js [DropdownMenuItem]
export type DropdownMenuItem = DropdownMenuCheckbox
  | DropdownMenuDivider
  | DropdownMenuGroup
  | DropdownMenuLabel
  | DropdownMenuSelectOption
  | DropdownMenuRouteOption
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

export interface DropdownMenuSelectOption {
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  isHidden: boolean
  isDisabled: boolean
  variant?: DropdownMenuStyleProps['variant']
  type: 'select-option'
  onSelect: () => void
}

export interface DropdownMenuRouteOption {
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  isHidden: boolean
  isDisabled: boolean
  variant?: DropdownMenuStyleProps['variant']
  target?: string
  to: RouteLocationNamedRaw
  type: 'route-option'
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
