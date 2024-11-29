<script setup lang="ts">
import { h, ref } from 'vue'

import Button from '@/components/button/button/Button.vue'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu.vue'
import PhoneNumberField from '@/components/input-field/phone-number-field/PhoneNumberField.vue'
import Textarea from '@/components/input-field/text-area/Textarea.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import Select from '@/components/select/Select.vue'
import Switch from '@/components/switch/Switch.vue'
import Table from '@/components/table/Table.vue'
import TableCell from '@/components/table/TableCell.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import Tag from '@/components/tag/Tag.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type'
import type { PaginatedData } from '@/types/pagination.type'
import type { SelectItem } from '@/types/select.type'
import type { TableColumn } from '@/types/table.type'
import type { TabItem } from '@/types/tabs.type'

setupDefaultStyles()

const selectItems = ref<SelectItem<string>[]>([
  {
    items: [
      {
        type: 'option',
        value: 'Apple',
      },
      {
        type: 'option',
        value: 'Banana',
      },
      {
        type: 'option',
        value: 'Blueberry',
      },
      {
        isDisabled: true,
        type: 'option',
        value: 'Grapes',
      },
      {
        isDisabled: true,
        type: 'option',
        value: 'Leek',
      },
      {
        isDisabled: true,
        type: 'option',
        value: 'Pear',
      },
      {
        type: 'option',
        value: 'Raspberry',
      },
      {
        type: 'option',
        value: 'Strawberry',
      },
      {
        type: 'option',
        value: 'Cherry',
      },
    ],
    label: 'Fruits',
    type: 'group',
  },
])

const value = ref<string | null>(null)

const dropdownMenuItems = ref<DropdownMenuItem[]>([
  {
    label: 'Option 1',
    type: 'option',
    onSelect: (): void => {
      //
    },
  },
  {
    label: 'Option 2',
    type: 'option',
    onSelect: (): void => {
      //
    },
  },
  {
    label: 'Option 3',
    type: 'option',
    onSelect: (): void => {
      //
    },
  },
  {
    items: [
      {
        label: 'Option 1',
        type: 'option',
        onSelect: (): void => {
          //
        },
      },
      {
        label: 'Option 2',
        type: 'option',
        onSelect: (): void => {
          //
        },
      },
      {
        label: 'Option 3',
        type: 'option',
        onSelect: (): void => {
          //
        },
      },
    ],
    label: 'Sub menu',
    type: 'subMenu',
  },
  {
    items: [
      {
        isDestructive: true,
        icon: 'alertCircle',
        label: 'Option 1',
        type: 'option',
        onSelect: (): void => {
          //
        },
      },
      {
        isDisabled: true,
        label: 'Option 2',
        type: 'option',
        onSelect: (): void => {
          //
        },
      },
    ],
    label: 'Group',
    type: 'group',
  },
])

const data: PaginatedData<string> = {
  data: [
    'Wouter',
    'Laermans',
  ],
  meta: {
    limit: 10,
    offset: 0,
    total: 10,
  },
}

const columns: TableColumn<string>[] = [
  {
    cell: (row) => h(TableCell, () => row),
    headerLabel: 'Name',
    key: 'name',
  },
  {
    cell: (row) => h(TableCell, () => row),
    headerLabel: 'Name',
    key: 'name',
  },
  {
    cell: (row) => h(TableCell, () => row),
    headerLabel: 'Name',
    key: 'name',
    width: '500px',
  },
  {
    cell: (row) => h(TableCell, () => row),
    headerLabel: 'Name',
    key: 'name',
    width: '500px',
  },
  {
    cell: (row) => h(TableCell, () => row),
    headerLabel: 'Name',
    key: 'name',
    width: '500px',
  },
]

const tabs: TabItem[] = [
  {
    label: 'Tab 1',
    value: '1',
  },
  {
    label: 'Tab 2',
    value: '2',
  },
  {
    label: 'Tab 3',
    value: '3',
  },
]

const tab = ref<TabItem>(tabs[0]!)
</script>

<template>
  <div class="">
    <ConfigProvider
      :pagination="{
        limit: 10,
      }"
      locale="en"
    >
      <ThemeProvider
        :is-dark-mode-enabled="false"
        theme="default"
        class="bg-primary p-24"
      >
        <Table
          :is-loading="false"
          :data="data"
          :columns="columns"
          :is-first-column-sticky="true"
          :pagination="{
            paginationOptions: {
              value: {
                pagination: {
                  limit: 1,
                  offset: 0,
                },
              },
            },
          }"
        >
          <template #top>
            heheheeh
          </template>
        </Table>

        <div class="grid grid-cols-3 gap-12">
          <div>
            <IconButton
              icon="translate"
              label="test"
              variant="destructive-secondary"
            />
          </div>

          <div>
            <IconButton
              icon="translate"
              label="Translate"
              size="xl"
            />
          </div>

          <div>
            <Tabs
              v-model="tab"
              :items="tabs"
            />
          </div>

          <div>
            <Textarea
              :model-value="null"
              label="Label"
            />
          </div>

          <div>
            <Switch
              :model-value="false"
              :is-disabled="false"
              :errors="{
                _errors: ['Error'],
              }"
              :is-touched="false"
              hint="This is a hint."
              icon-unchecked="translate"
              icon-checked="check"
            />
          </div>

          <div>
            <DropdownMenu :items="dropdownMenuItems">
              <template #trigger>
                <Button>
                  Trigger
                </Button>
              </template>
            </DropdownMenu>
          </div>

          <div>
            <PhoneNumberField
              :model-value="null"
              :is-required="true"
              label="Phone number"
            />
          </div>

          <div>
            <Select
              v-model="value"
              :items="selectItems"
              :display-fn="(value) => value"
              :errors="{
                _errors: ['This is an error message.'],
              }"
              :style-config="{
              // '--select-option-font-weight-default': '600',
              // '--select-option-text-color-default': '#ff00ff',
              }"
              :is-touched="false"
              hint="This is a hint."
              label="Select a fruit"
              placeholder="Select a fruit"
              icon-left="translate"
            />
          </div>

          <div>
            <TextField
              :style-config="{
              // '--text-field-label-font-size-default': '20px',
              // '--text-field-label-font-weight-default': '600',
              }"
              :model-value="null"
              icon-right="translate"
              icon-left="translate"
              label="Email address"
            />
          </div>

          <div>
            <TextField
              :style-config="{
              // '--text-field-label-font-size-default': '20px',
              // '--text-field-label-font-weight-default': '600',
              }"
              :is-loading="true"
              :model-value="null"
              icon-right="translate"
              icon-left="translate"
              label="Email address"
            />
          </div>

          <div>
            <TextField
              :style-config="{
              // '--text-field-label-font-size-default': '20px',
              // '--text-field-label-font-weight-default': '600',
              }"
              :model-value="null"
              :is-disabled="true"
              icon-right="translate"
              icon-left="translate"
              label="Email address"
            />
          </div>

          <div>
            <TextField
              :style-config="{
              // '--text-field-label-font-size-default': '20px',
              // '--text-field-label-font-weight-default': '600',
              // '--text-field-bg-color-error': '#ff00ff',
              }"
              :model-value="null"
              :is-disabled="false"
              :errors="{
                _errors: ['This is an error message.'],
              }"
              :is-touched="true"
              icon-right="translate"
              icon-left="translate"
              label="Email address"
            />
          </div>

          <div>
            <Tag :is-removable="true">
              Hehehe
            </Tag>
          </div>

          <div>
            <Button
              :is-loading="false"
              :is-disabled="false"
              :style-config="{
              }"
              icon-left="alertCircle"
              variant="default"
            >
              Button
            </Button>
          </div>

          <div>
            <Button
              :is-loading="true"
              :is-disabled="false"
              variant="secondary"
            >
              Button
            </Button>
          </div>

          <div>
            <Button
              :is-loading="false"
              :is-disabled="false"
              variant="destructive-primary"
            >
              Button
            </Button>
          </div>

          <div>
            <Button
              :is-loading="false"
              :is-disabled="false"
              size="sm"
              icon-left="translate"
              variant="destructive-tertiary"
            >
              Button
            </Button>
          </div>

          <div>
            <IconButton
              icon="translate"
              label="Translate"
            />
          </div>

          <div>
            <IconButton
              :is-loading="true"
              icon="translate"
              label="Test"
              variant="destructive-primary"
            />
          </div>

          <div>
            <IconButton
              :is-disabled="true"
              icon="translate"
              label="Test"
            />
          </div>
        </div>
      </ThemeProvider>
    </ConfigProvider>
  </div>
</template>
