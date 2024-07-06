<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppDropdownMenu,
  AppText,
  type DropdownMenuItem,
} from '@wisemen/vue-core'

const controls = createControls({
  offset: {
    default: '4',
    cols: 2,
    label: 'Offset',
    type: 'text',
  },
  align: {
    default: 'center',
    items: [
      'center',
      'end',
      'start',
    ],
    label: 'Align',
    type: 'select',
  },
  side: {
    default: 'bottom',
    items: [
      'bottom',
      'left',
      'right',
      'top',
    ],
    label: 'Side',
    type: 'select',
  },
  hasArrow: {
    default: false,
    label: 'Has arrow',
    type: 'switch',
  },
  enableGlobalKeyboardShortcuts: {
    default: false,
    label: 'Enable global keyboard shortcuts',
    type: 'switch',
  },
  inheritTriggerWidth: {
    default: false,
    label: 'Inherit trigger width',
    type: 'switch',
  },
})

const exampleItems: DropdownMenuItem[] = [
  {
    type: 'group',
    items: [
      {
        type: 'selectOption',
        label: 'Option 1',
        icon: 'search',
        onSelect: (): void => {
          alert('Option 1 selected')
        },
      },
      {
        type: 'selectOption',
        label: 'Option 2',
        icon: 'search',
        variant: 'destructive',
        onSelect: (): void => {
          alert('Option 2 selected')
        },
      },
      {
        type: 'selectOption',
        label: 'Option 3 (disabled)',
        isDisabled: true,
        icon: 'search',
        onSelect: (): void => {
          alert('Option 3 selected')
        },
      },
      {
        type: 'selectOption',
        label: 'Option 3 (hidden)',
        isHidden: true,
        icon: 'search',
        onSelect: (): void => {
          alert('Option 4 selected')
        },
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    type: 'group',
    items: [
      {
        type: 'subMenu',
        label: 'More',
        items: [
          {
            type: 'group',
            items: [
              {
                type: 'selectOption',
                label: 'Option 1',
                keyboardShortcutKeys: [
                  'ctrl',
                  '1',
                ],
                variant: 'destructive',
                onSelect: (): void => {
                  alert('More > Option 1 selected')
                },
              },
              {
                type: 'selectOption',
                label: 'Option 2',
                isDisabled: true,
                keyboardShortcutKeys: [
                  'ctrl',
                  '2',
                ],
                onSelect: (): void => {
                  alert('More > Option 2 selected')
                },
              },
              {
                type: 'selectOption',
                label: 'Option 3',
                keyboardShortcutKeys: [
                  'ctrl',
                  '3',
                ],
                onSelect: (): void => {
                  alert('More > Option 3 selected')
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppDropdownMenu
        v-bind="values"
        :offset="+values.offset"
        :items="exampleItems"
      >
        <template #header>
          <AppText
            variant="subtext"
            class="p-1 text-muted-foreground"
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
  </ComponentPlayground>
</template>
